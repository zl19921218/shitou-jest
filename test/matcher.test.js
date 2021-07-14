/*
 * @Author: 石头
 * @Date: 2021-07-12 11:24:39
 * @LastEditors: 石头
 * @LastEditTime: 2021-07-12 15:52:07
 * @Description: 匹配器
 */


test('2 + 2', () => {

    const result = 2 + 2;

    expect(result).toBe(4);

    
});

test('对象是否相同', () => {
    const a = {
        one: 1,
        two: {
            three: 3,
        }
    }
    expect(a).toEqual({
        one: 1,
        two: {
            three: 3,
        }
    });
});

test('测试null', () => {
    var a = null;

    // expect(a).toBeNull();

    // expect(a).toBeUndefined();

    expect(a).toBeDefined();
});

test('真假', () => {
    var a = true;
    expect(a).toBeTruthy();
})

test('真假', () => {
    var a = false;
    expect(a).toBeFalsy();
})

test('大于', () => {
    var a = 10;

    expect(a).toBeGreaterThan(9);
})

test('小于', () => {
    var a = 10;

    expect(a).toBeLessThan(11);
});

test('小于等于',() => {
    var a = 10;

    expect(a).toBeLessThanOrEqual(10);

    expect(a).toBeLessThanOrEqual(11);
})

test('大于等于', () => {
    var a = 10;

    expect(a).toBeGreaterThanOrEqual(10);
    expect(a).toBeGreaterThanOrEqual(9);
})

test('非', () => {
    var a = 1;

    expect(a).toEqual(1);
})

test('浮点数', () => {
    var a = 0.1;
    var b = 0.2;

    expect(a + b).toBeCloseTo(0.3);
});


test('数组包含', () => {
    const a = ['a', 'b', 1];

    expect(a).toContain('a');
});

const throwNewErrorFunc = () => {
    throw new Error('这是一个异常');
}
test('抛出异常', () => {
    expect(throwNewErrorFunc).toThrow('这是一个异常');
    
});
