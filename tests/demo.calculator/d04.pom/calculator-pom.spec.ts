import { expect, test } from "@playwright/test";
import { CalculatorPageObject } from "./CalculatorPage";

test("calculator test", async ({ page }) => {
  const calcPage = new CalculatorPageObject(page);
  await calcPage.initialize();

  await calcPage.setFirstOp("1")
  await calcPage.setSecondOp("2")
  const resultPage  = await calcPage.calculate()

  await resultPage.validateResult()
});
