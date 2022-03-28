module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "prettier"],
  plugins: ["svelte3"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    allowImportExportEverywhere: true,
    extraFileExtensions: [".svelte"],
  },
  rules: {
    "no-undef": 0,
  },
  overrides: [
    {
      files: ["*.svelte"],
      processor: "svelte3/svelte3",
    },
  ],
  settings: {
    "svelte3/ignore-styles": () => true,
  },
  globals: {
    gtag: "readonly",
  },
};
