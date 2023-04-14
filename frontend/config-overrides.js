const ESLintPlugin = require('eslint-webpack-plugin')
const tsConfig = require('./tsconfig.json')
const path = require('path')

module.exports = function override(config, webpackENV) {


  if (webpackENV === "development") {
    for (let i = 0; i < config.plugins.length; i++) {
      if (config.plugins[i].key !== "ESLintWebpackPlugin") continue;
      const currentEslint = config.plugins[i];
      config.plugins[i] = new ESLintPlugin({
        ...currentEslint.options,
      })
      break;
    }
  }


  const {
    compilerOptions: { rootDir, paths: tsConfigPath },
  } = tsConfig;

  config.resolve.modules = [path.resolve(__dirname, rootDir), 'node_modules']
  config.resolve.alias = {
    ...config.resolve.alias,
    ...Object.keys(tsConfigPath).reduce((acc, key) => {
      acc[key.replace('/*', '')] = path.resolve(
        __dirname,
        `${tsConfigPath[key][0].replace('*', '')}`
      );
      return acc;
    }, {})
  }

  return config;
}