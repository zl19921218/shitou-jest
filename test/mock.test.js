/*
 * @Author: 石头
 * @Date: 2021-07-13 11:09:01
 * @LastEditors: 石头
 * @LastEditTime: 2021-07-13 11:19:09
 * @Description: 
 */

import {
    runCallback1,
    runCallback2
} from '../util/mock';

test('test runCallback1', () => {
    const func = () => 2;

    expect(runCallback1(func)).toBe(2);
})

test('test runCallback1', () => {
    const func = jest.fn();

    runCallback2(func);

    expect(func).toBeCalled();

    console.log('func: ', func.mock);
})
