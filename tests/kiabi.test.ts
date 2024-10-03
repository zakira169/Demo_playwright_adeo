import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import * as path from 'path';  // Ajouter ce module pour gérer les chemins dynamiquement


let testData: any;
test.beforeEach(async ({ baseURL }) => {
  const dataPath = path.resolve(__dirname, '../data');

  if (baseURL === 'https://www.kiabi.fr') {
    testData = require(`${dataPath}/testData.fr.json`);
  } else if (baseURL === 'https://www.kiabi.es') {
    // Charger dynamiquement l'une des sources de données pour l'Espagne
    testData = require(`${dataPath}/testData.es.json`);
  }
});



test("Test du parcours d'achat sur Kiabi", async ({ page, baseURL }) => {
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);

  // Aller à la page d'accueil
  await page.goto(baseURL!);

  // Accepter les cookies
  await homePage.acceptCookies();

  // Rechercher un article
  await homePage.searchProduct(testData.searchKeyword);

  // Sélectionner un produit et l'ajouter au panier
  await productPage.selectProduct(testData.productReference);
  await productPage.addToCart();

  // Continuer comme invité avec code postal
  await cartPage.continueAsGuest(testData.postalCode);

  // Choisir la livraison à domicile
  await cartPage.chooseHomeDelivery();

  // Vérifier la page de paiement
 await cartPage.verifyPaymentPage(testData.country);
});
