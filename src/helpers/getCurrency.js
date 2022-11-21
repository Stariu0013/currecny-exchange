import axios from "axios";

const API_KEY = "41a35b8594a3f49813a8cd58";

export const getPairRate = (first, second) => {
    return axios
        .get(
            `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${first}/${second}`
        )
        .then((res) => res.data.conversion_rate)
        .catch((err) => {
            console.error(err.message);
        });
};

export const getRates = () => {
    const getUsd = getPairRate("USD", "UAH");
    const getEur = getPairRate("EUR", "UAH");

    return Promise.all([getUsd, getEur]).then((res) => res);
};
