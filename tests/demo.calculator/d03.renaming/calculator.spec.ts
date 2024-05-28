import { Page, expect, test } from "@playwright/test";

test("calculator test", async ({ page }) => {
  await page.goto("/calculator");

  await setFirstOp(page, "1");
  await setSecondOp(page, "2");
  await click(page);

  await verifyResult(page);
});

async function verifyResult(page: Page) {
  return await expect(page.getByText("And the result is.... 3")).toBeVisible();
}

async function click(page: Page) {
  return await page.getByRole("button", { name: "Calculate" }).click();
}

async function setSecondOp(page: Page, arg : string) {
  return await page.getByRole("textbox", { name: "Second" }).fill(arg);
}

async function setFirstOp(page: Page, arg : string) {
  return await page.getByRole("textbox", { name: "First" }).fill(arg);
}

