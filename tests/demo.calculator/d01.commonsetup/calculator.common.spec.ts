import { Locator, expect, test } from "@playwright/test";

let firstOp!: Locator;
let secondOp!: Locator;
let calculateButton!: Locator;
let resultText!: Locator;

test.beforeEach(async ({ page }) => {
  await page.goto("/calculator");
  firstOp = page.getByRole("textbox", { name: "First" });
  secondOp = page.getByRole("textbox", { name: "Second" });
  calculateButton = page.getByRole("button", { name: "Calculate" });
  resultText = page.getByText("And the result is....");
});

test("calculator add 1+2", async () => {
  await firstOp.fill("1");
  await secondOp.fill("2");
  await calculateButton.click();
  await expect(resultText).toContainText("3");
});

test("calculator add 3+4", async () => {
  await firstOp.fill("3");
  await secondOp.fill("4");
  await calculateButton.click();
  await expect(resultText).toContainText("7");
});
