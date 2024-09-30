const { resolve: pathResolve } = require("node:path");

const tsconfigPath = pathResolve(process.cwd(), "tsconfig.json");

export default {
  extends: [
    "@vercel/style-guide/eslint/node",
    "@vercel/style-guide/eslint/typescript",
  ].map((module) => require.resolve(module)),
  parserOptions: {
    tsconfigPath,
  },
  plugins: ["only-warn"],
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ["node_modules/", "dist/"],
};