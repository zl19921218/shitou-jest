/*
 * @Author: 石头
 * @Date: 2021-07-12 11:15:41
 * @LastEditors: 石头
 * @LastEditTime: 2021-07-12 11:17:56
 * @Description: 
 */

// babel.config.js
module.exports = {
    presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        '@babel/preset-typescript',
    ],
};