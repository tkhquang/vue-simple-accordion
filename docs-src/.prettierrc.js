module.exports = {
  parser: "flow",
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  trailingComma: "none",
  bracketSpacing: true,
  commaDangle: ["error", "always"],
  noCondAssign: ["error", "always"],
  overrides: [
    {
      files: "**/*.html",
      options: {
        parser: "html"
      }
    },
    {
      files: "**/*.vue",
      options: {
        parser: "vue"
      }
    }
  ]
};
