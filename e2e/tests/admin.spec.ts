import { test, expect } from "@playwright/test";

test("admin app loads correctly", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("admin project")).toBeVisible();
});

test("admin button works", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "sas" }).click();
  // تست alert یا navigation
});
