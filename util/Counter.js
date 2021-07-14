/*
 * @Author: 石头
 * @Date: 2021-07-13 10:17:12
 * @LastEditors: 石头
 * @LastEditTime: 2021-07-13 10:32:28
 * @Description: 
 */


class Counter {
    constructor() {
        this.number = 0;
    }

    addOne() {
        this.number += 1;
    }

    addTwo() {
        this.number += 2;
    }

    minusOne() {
        this.number -= 1;
    }

    minusTwo() {
        this.number -= 2;
    }
}

export default Counter;