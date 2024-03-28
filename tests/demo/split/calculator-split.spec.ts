import { expect, test } from "@playwright/test";

test.beforeEach(async ({page}) => {
  await page.goto("/calculator");
})

test("calculator add 1+2", async ({ page }) => {
  await page.getByRole("textbox", { name: "First" }).fill("1");
  await page.getByRole("textbox", { name: "Second" }).fill("2");
  await page.getByRole("button", { name: "Calculate" }).click();

  await expect(page.getByText("And the result is.... 3")).toBeVisible();
  
});

test("calculator add 3+4", async ({ page }) => {
  await page.getByRole("textbox", { name: "First" }).fill("3");
  await page.getByRole("textbox", { name: "Second" }).fill("4");
  await page.getByRole("button", { name: "Calculate" }).click();

  await expect(page.getByText("And the result is.... 7")).toBeVisible();
});

test("navigation back from result displays the title", async ({ page }) => {
  await page.goto("/result")
  await page.goBack()
  await expect(page.getByText("Welcome to the Calculator!")).toBeVisible();
  });
