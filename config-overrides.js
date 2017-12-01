/**
 * 作用于哪些页面
 * 注明代码业务/功能说明
 * @date 2017/12/1
 * @authors ChengLN(chenglingna@erayt.com)
 */
const {injectBabelPlugin} = require('react-app-rewired');
module.exports = function override(config, env) {
    // do stuff with the webpack config...
    config = injectBabelPlugin(['import', {libraryName: 'antd', style: 'css'}], config);
    return config;
};