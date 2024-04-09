import { defineConfig } from 'eslint/config';

export default defineConfig({
  // Define the environments
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true // This allows Jest globals such as 'describe' and 'test'
  },
  // Extend any base configurations
  extends: [
    "eslint:recommended",
    // If you have other base configurations, they go here
  ],
  // Apply overrides for specific files
  overrides: [
    {
      files: ["**/*.test.js", "**/*.spec.js"], // Targeting test files
      plugins: ["jest"], // Ensure eslint-plugin-jest is being used
      extends: ["plugin:jest/recommended"], // Use recommended jest rules
      rules: {
        // You can override or specify additional rules specific to test files here
        "jest/prefer-expect-assertions": "off", // Example rule
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 12, // Adjust according to your project's needs
    sourceType: "module",
  },
  rules: {
    // Global rules that apply to all files
  },
});


