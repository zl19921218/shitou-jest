/*
 * @Author: 石头
 * @Date: 2021-07-13 10:14:57
 * @LastEditors: 石头
 * @LastEditTime: 2021-07-13 11:03:31
 * @Description: 钩子函数测试
 */

import Counter from "../util/Counter";

let counter = null;

let cnt = 0;

beforeAll(() => {
    console.log('beforeAll 1', ++ cnt); // 1
})

beforeEach(() => {
    console.log('beforeEach 1', ++ cnt); // 3 7
    counter = new Counter();
})

describe('test add', () => {

    beforeAll(() => {
        console.log('beforeAll 2', ++ cnt); // 2
    })
    
    beforeEach(() => {
        console.log('beforeEach 2', ++ cnt); // 4 8
        counter = new Counter();
    })

    console.log('test add');
    test.only('Counter addOne func', () => {
        counter.addOne();
        expect(counter.number).toBe(1);
    })
    
    test('Counter addTwo func', () => {
        counter.addTwo();
        expect(counter.number).toBe(2);
    })

    afterEach(() => {
        console.log('afterEach 2', ++ cnt); // 5 9
    })
    
    afterAll(() => {
        console.log('afterAll 2', ++ cnt); // 11
    })
})

// describe('test minus', () => {
//     console.log('test minus');
//     test('Counter minusOne func', () => {
//         counter.minusOne();
//         expect(counter.number).toBe(-1);
//     })
    
//     test('Counter minusTwo func', () => {
//         counter.minusTwo();
//         expect(counter.number).toBe(-2);
//     })
// })

afterEach(() => {
    console.log('afterEach 1', ++ cnt); // 6 10
})

afterAll(() => {
    console.log('afterAll 1', ++ cnt); // 12
})