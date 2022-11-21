import React, { useState } from "react";
import {convertor} from "../../helpers/convertor";
import Loader from "../Loader/Loader";

import styles from './Convertor.module.css';

const Convertor = () => {
    const [isLoading, setIsLoading] = useState(false);

    const [fromSelect, setFromSelect] = useState("USD");
    const [fromValue, setFromValue] = useState(0);

    const [toSelect, setToSelect] = useState("USD");
    const [toValue, setToValue] = useState(0);

    const setLoaderFalse = () => {
        setIsLoading(false);
    };

    const handleChangeFromSelect = (event) => {
        const select = event.target.value;

        convertor(fromValue, setToValue, select, toSelect);
        setFromSelect(select);
    };
    const handleChangeFromValue = (event) => {
        const value = Number(event.target.value);

        setIsLoading(true);
        convertor(value, setToValue, fromSelect, toSelect, setLoaderFalse);
        setFromValue(value);
    };

    const handleChangeToSelect = (event) => {
        const select = event.target.value;

        setToValue(0);

        convertor(fromValue, setToValue, fromSelect, select);
        setToSelect(select);
    };
    const handleChangeToValue = (event) => {
        const value = Number(event.target.value);

        setIsLoading(true);
        convertor(value, setFromValue,toSelect, fromSelect, setLoaderFalse);
        setToValue(value);
    };

    return <div className={styles.container}>
        {
            isLoading
                ? <Loader />
                : (
                    <>
                        <div className={[styles.selectBlock, styles.selectBlock__top].join(' ')}>
                            <select
                                value={fromSelect}
                                className={styles.select}
                                onChange={handleChangeFromSelect}
                            >
                                <option value="USD">
                                    USD
                                </option>
                                <option value="EUR">
                                    EUR
                                </option>
                                <option value="UAH">
                                    UAH
                                </option>
                            </select>
                            <input
                                className={[styles.input, styles.input__top].join(' ')}
                                type="number"
                                value={fromValue}
                                onChange={handleChangeFromValue}
                            />
                        </div>
                        <div className={[styles.selectBlock, styles.selectBlock__bottom].join(' ')}>
                            <select
                                value={toSelect}
                                className={styles.select}
                                onChange={handleChangeToSelect}
                            >
                                <option value="USD">
                                    USD
                                </option>
                                <option value="EUR">
                                    EUR
                                </option>
                                <option value="UAH">
                                    UAH
                                </option>
                            </select>
                            <input
                                className={[styles.input, styles.input__bottom].join(' ')}
                                type="number"
                                value={toValue}
                                onChange={handleChangeToValue}
                            />
                        </div>
                    </>
                )
        }
    </div>
};

export default Convertor;
