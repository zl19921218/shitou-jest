/*
 * @Author: 石头
 * @Date: 2021-07-12 16:36:35
 * @LastEditors: 石头
 * @LastEditTime: 2021-07-12 19:54:30
 * @Description: 网络请求 测试
 */


import {
    fetchDate,
    getDate
} from "../util/fetchDate";

test('网络请求1', (done) => {
    fetchDate('http://localhost:3000/first').then(res => {
        expect(res.data).toEqual({
            "text": "hello first"
        });

        done();
    });
});

// test('网络请求2', () => {
//     expect.assertions(1);
//     return getDate('http://localhost:3000/second').then(res => {
//         expect(res.data).toEqual({
//             "text": "hello first"
//         });
//     }).catch(e => {
//         console.log(e);
//         expect(e.toString()).toBe(true);
//     });
// });

test('toMatchObject', () => {
    expect(fetchDate('http://localhost:3000/first')).resolves.toMatchObject({
        data: {
            text: "hello first"
        }
    })
});