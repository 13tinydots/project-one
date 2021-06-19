module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "no-unused-vars": 1,
  },
};
