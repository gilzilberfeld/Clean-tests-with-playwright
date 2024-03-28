import { expect, Page } from "@playwright/test";

export class ResultPage {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async validateResult() {
    const theText = this.page.getByText("And the result is.... 3");
    await expect(theText).toBeVisible();
  }

}
