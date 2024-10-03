import { Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async acceptCookies() {
    await this.page.locator('#popin_tc_privacy_button').click();
  }

  async searchProduct(keyword: string) {
    // const searchInput=this.page.locator('[class^=headerSearch_input_search]');
    // searchInput.click();
    // searchInput.fill(keyword);
    // await this.page.press('input[name="search"]', 'Enter');
    const searchInput= this.page.locator('[data-testid=headerSearch_input_search]').locator('input');
    await searchInput.click();
    await searchInput.fill(keyword);
    await searchInput.press('Enter');
  }
}
