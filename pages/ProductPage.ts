import { Page } from '@playwright/test';

export class ProductPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async selectProduct(productReference:string) {
    await this.page.getByTestId('productCardInformations_button_addToCart_/'+productReference).click(); // Sélectionne le premier produit
  }

  async addToCart() {
    // await this.page.getByTestId('productInformation_button_addToCart').click();
    await this.page.getByTestId('productSizes_selectSize_39').click();
    await this.page.getByTestId('cartConfirmationDrawer_button_seeCart').click()
    await this.page.getByTestId('invoiceDetailsCard_button_validateCart').click();
  }
}
