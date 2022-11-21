import React, { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import Convertor from "./components/Convertor/Convertor";
import { getRates } from "./helpers/getCurrency";
import Loader from "./components/Loader/Loader";

import styles from "./main.module.css";

const App = () => {
    const [rates, setRates] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        getRates().then((res) => {
            setRates(res);
            setIsLoading(false);
        });
    }, []);

    return (
        <div className={styles.container}>
            {
                isLoading ? (
                    <Loader />
                ) : (
                    <div className={styles.exchangeWrapper}>
                        <Header rates={rates} />
                        <Convertor />
                    </div>
                )
            }
        </div>
    )
};

export default App;
