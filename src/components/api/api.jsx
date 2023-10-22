import React, { useEffect, useState } from "react";
import styles from "./style.module.css";

const TestApi = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://www.cbr-xml-daily.ru/daily_json.js')
        .then(res => res.json())
        .then(res2 => setData(Object.values(res2.Valute)));
    }, []);

    return (
        <div>
            <h1 className={styles.headLine}>Курсы валют</h1>
            <div className={styles.container}>
                {data.map((currency, index) => (
                    <div className={styles.currencyCard} key={index}>
                        <h2>{currency.Name}</h2>
                        <p>{currency.CharCode}</p>
                        <p>Значение: {currency.Value.toFixed(2)} руб.</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestApi;
