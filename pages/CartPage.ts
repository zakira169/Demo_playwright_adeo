import { Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }


  async continueAsGuest(postalCode: string) {
    await this.page.getByTestId('accountInfosAuthEmailUnknownDrawer_button_TMI').click();
    await this.page.getByTestId('postalCode_input_postalCode').click();
    await this.page.getByTestId('postalCode_input_postalCode').fill(postalCode);
    await this.page.getByTestId('postalCode_button_validate').click();
  }

  async chooseHomeDelivery() {
    await this.page.getByTestId('deliveryChoices_radio_shippingHome').click();
    await this.page.getByTestId('shippingCartDeliveryOptions_label_HOME').click();


  }

  async verifyPaymentPage(country: string) {
    const prefix = `homeAddressForm${country}_`;
    const billingprefix = `billingForm${country}_`;
    await this.page.getByTestId(`${prefix}input_lastName`).click();
    await this.page.getByTestId(`${prefix}input_lastName`).fill("kiram");
    if (await this.page.getByTestId(`${prefix}input_secondLastName`).isVisible()) {
      await this.page.getByTestId(`${prefix}input_secondLastName`).click();
      await this.page.getByTestId(`${prefix}input_secondLastName`).fill("kiram1");
    }
    await this.page.getByTestId(`${prefix}input_firstName`).click();
    await this.page.getByTestId(`${prefix}input_firstName`).fill("zakaria");
    await this.page.getByTestId(`${prefix}input_addressLine1`).click();
    await this.page.getByTestId(`${prefix}input_addressLine1`).fill("tata");
    await this.page.getByTestId(`${prefix}input_addressLine2`).click();
    await this.page.getByTestId(`${prefix}input_addressLine2`).fill("tato");
    await this.page.getByTestId(`${prefix}input_city`).click();
    await this.page.getByTestId(`${prefix}input_city`).fill("villeneuve d'ascq");
    await this.page.getByTestId(`${prefix}button_validate`).click();

    await this.page.getByTestId('mobileForm-mobile').click();
    await this.page.getByTestId('mobileForm-mobile').fill('634555155');
    if (await this.page.getByTestId(`billingAddress${country}DialogContent-validation_btn`).isVisible()) {
      await this.page.getByTestId(`billingAddress${country}DialogContent-validation_btn`).click();
    }
    await this.page.getByTestId('billingCard_section_complete').click();
    await this.page.getByTestId(`${billingprefix}input_birthDate`).click();
    await this.page.getByTestId(`${billingprefix}input_birthDate`).fill("16/09/1988_");
    await this.page.getByTestId(`${billingprefix}input_email`).click();
    await this.page.getByTestId(`${billingprefix}input_email`).fill('kiram@gmail.com');
    await this.page.getByTestId(`${billingprefix}button_validate`).click();
    if (await this.page.getByTestId(`billingAddress${country}DialogContent-validation_btn`).isVisible()) {
      await this.page.getByTestId(`billingAddress${country}DialogContent-validation_btn`).click();
      await this.page.getByTestId('shippingStep_button_validate').click();
    } 
    
  }
  
}
