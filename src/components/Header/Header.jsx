import React from "react";
import ReactCountryFlag from "react-country-flag";

import styles from "./Header.module.css";

const Header = ({ rates }) => {
    const [usd, eur] = rates;

    return (
        <div className={styles.currencyBlock}>
            <ReactCountryFlag
                countryCode="US"
                svg
                style={{
                    width: "1.5em",
                    height: "1.5em",
                }}
                title="US"
            />
            <p>{usd}</p>

            <ReactCountryFlag
                countryCode="EU"
                svg
                style={{
                    width: "1.5em",
                    height: "1.5em",
                }}
                title="EU"
            />
            <p>{eur}</p>
        </div>
    );
};

export default Header;
