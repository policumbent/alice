const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        aliases: {
          "react": "./node_modules/preact/compat",
          "react-dom": "./node_modules/preact/compat",
          "react-dom/test-utils": "./node_modules/preact/test-utils",
          "enzyme-adapter-react-16": "./node_modules/enzyme-adapter-preact-pure"
        }
      }
    }
  ]
};
