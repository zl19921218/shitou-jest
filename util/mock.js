/*
 * @Author: 石头
 * @Date: 2021-07-13 11:08:49
 * @LastEditors: 石头
 * @LastEditTime: 2021-07-13 11:19:38
 * @Description: 
 */

export const runCallback1 = callback => callback();

export const runCallback2 = callback => {
    callback('aaa');
};
