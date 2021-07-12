/*
 * @Author: 石头
 * @Date: 2021-07-09 17:29:13
 * @LastEditors: 石头
 * @LastEditTime: 2021-07-12 14:21:45
 * @Description: 
 */

// const math = require('../util/math');

import {
    add,
    minus
} from '../util/math';


test('测试 3 + 2 = 5', () => {
    expect(add(3, 2)).toBe(5);
});

test('测试 3 - 2 = 1', () => {
    expect(minus(3, 2)).toBe(1);
});