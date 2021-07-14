/*
 * @Author: 石头
 * @Date: 2021-07-12 16:47:55
 * @LastEditors: 石头
 * @LastEditTime: 2021-07-12 17:09:17
 * @Description: 网络请求
 */

import axios from "axios";

export async function fetchDate(url, params) {
    const res = await axios.get(url, params);

    return res;
}

export function getDate(url, params) {
    return axios.get(url, params);
}
