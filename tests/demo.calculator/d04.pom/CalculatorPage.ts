import { Page, Locator } from "@playwright/test";
import { ResultPage } from "./ResultPage";

export class CalculatorPageObject {
  page: Page;
  firstOp!: Locator;
  secondOp!: Locator;
  button!: Locator;

  constructor(page: Page) {
    this.page = page;
  }

  async initialize() {
    await this.page.goto("/calculator");

    this.firstOp = this.page.getByRole("textbox", { name: "First" });
    this.secondOp = this.page.getByRole("textbox", { name: "Second" });
    this.button = this.page.getByRole("button", { name: "Calculate" });
  }

  async setFirstOp(opVal: string) {
    await this.firstOp.fill(opVal);
  }

  async setSecondOp(opVal: string) {
    await this.secondOp.fill(opVal);
  }

  async calculate(): Promise<ResultPage> {
    await this.button.click();
    return new ResultPage(this.page);
  }
}
