import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "admin",
      testMatch: "**/admin.spec.ts",
      use: {
        ...devices["Desktop Chrome"],
        baseURL: "http://localhost:5173",
      },
    },
    {
      name: "site",
      testMatch: "**/site.spec.ts",
      use: {
        ...devices["Desktop Chrome"],
        baseURL: "http://localhost:3000",
      },
    },
  ],
  webServer: [
    {
      command: "npm run dev --workspace=apps/admin",
      port: 5173,
      reuseExistingServer: !process.env.CI,
    },
    {
      command: "npm run dev --workspace=apps/site",
      port: 3000,
      reuseExistingServer: !process.env.CI,
    },
  ],
});
