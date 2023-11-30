module.exports = {
  extends: [require.resolve("@umijs/fabric/dist/eslint")],
  rules: {
    "react/require-default-props": 0
  },
  parserOptions: {
    sourceType: "module",
    project: ["tsconfig.json", "tsconfig.build.json"],
    tsconfigRootDir: __dirname
  }
};
