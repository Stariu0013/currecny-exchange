import { getPairRate } from "./getCurrency";

/**
 *  @param {number} value - input value
 *  @param {function} targetCB - setter of other input
 *  @param {string} from - currency from | USD-EUR-UAH
 *  @param {string} to - currency to | USD-EUR-UAH
 *  @returns void
 * */
export const convertor = (value, targetCb, from, to, callback) => {
    getPairRate(from, to).then((res) => {
        const resVal = value * res;

        callback && callback();

        targetCb(resVal);
    });
};
