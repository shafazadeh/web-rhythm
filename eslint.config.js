import { config as base } from "./packages/eslint-config/base.js";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  ...base,
  {
    ignores: ["**/node_modules/**", "**/dist/**", "**/.next/**", "**/build/**"],
  },
];
