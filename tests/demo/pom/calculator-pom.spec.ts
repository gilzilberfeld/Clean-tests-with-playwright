import { expect, test } from "@playwright/test";
import { CalculatorPageObject } from "./CalculatorPage";

test("calculator test", async ({ page }) => {
  const calcPage = new CalculatorPageObject(page);
  await calcPage.goto("/calculator");

  await calcPage.setFirstOp("1")
  await calcPage.setSecondOp("2")
  const resultPage  = await calcPage.click()

  await resultPage.validateResult()
});
