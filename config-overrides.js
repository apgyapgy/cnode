// 此文件是根据antd提供的方法添加的按需加载插件

const { injectBabelPlugin } = require('react-app-rewired')

module.exports = function override (config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', style: 'css' }], config)
  config.entry = ['babel-polyfill'].concat(config.entry)
  return config
}
