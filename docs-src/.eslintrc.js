module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
    "prettier/vue",
    "plugin:prettier/recommended"
  ],
  rules: {
    camelcase: "off",
    "vue/no-v-html": "off",
    "no-unused-vars": ["error", { args: "none" }]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
