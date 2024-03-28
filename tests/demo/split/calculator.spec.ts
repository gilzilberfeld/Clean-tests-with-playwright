import { expect, test } from "@playwright/test";

test("calculator test", async ({ page }) => {
  await page.goto("/calculator");

  await page.getByRole("textbox", { name: "First" }).fill("1");
  await page.getByRole("textbox", { name: "Second" }).fill("2");
  await page.getByRole("button", { name: "Calculate" }).click();

  await expect(page.getByText("And the result is.... 3")).toBeVisible();
  
  await page.goBack()
  await expect(page.getByText("Welcome to the Calculator!")).toBeVisible();

  await page.getByRole("textbox", { name: "First" }).fill("3");
  await page.getByRole("textbox", { name: "Second" }).fill("4");
  await page.getByRole("button", { name: "Calculate" }).click();

  await expect(page.getByText("And the result is.... 7")).toBeVisible();
  
});
