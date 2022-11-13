import { useState, useEffect } from 'react';
import axios from 'axios';

export const useCurrencyRate = () => {
    const [exchangeRate, setExchangeRate] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            (async () => {
                try {
                    const response = await axios.get("https://api.exchangerate.host/latest?base=PLN&source=ecb&&&");
                    setExchangeRate(response.data);
                } catch (error) {
                    setExchangeRate("error");
                }
            })();
        }, "2000");
        return () => clearTimeout(timer);
    }, []);

    return { exchangeRate }
};

export const currencies = [
    { short: "AUD", name: "Dolar australijski" },
    { short: "BGN", name: "Lewa bułgarska" },
    { short: "BRL", name: "Real brazylijski" },
    { short: "CAD", name: "Dolar kanadyjski" },
    { short: "CHF", name: "Frank szwajcarski" },
    { short: "CNY", name: "Yuan/Renminbi chiński" },
    { short: "CZK", name: "Korona czeska" },
    { short: "DKK", name: "Korona duńska" },
    { short: "EUR", name: "Euro" },
    { short: "GBP", name: "Funt brytyjski" },
    { short: "HKD", name: "Dolar Hongkongu" },
    { short: "HRK", name: "Kuna chorwacka" },
    { short: "HUF", name: "Forint węgierski" },
    { short: "IDR", name: "Rupia indonezyjska" },
    { short: "ILS", name: "Nowy szekel izraelski" },
    { short: "INR", name: "Rupia indyjska" },
    { short: "ISK", name: "Korona islandzka" },
    { short: "JPY", name: "Jen japoński" },
    { short: "KRW", name: "Won południowokoreański" },
    { short: "MXN", name: "Peso meksykańskie" },
    { short: "MYR", name: "Ringgit malajski" },
    { short: "NOK", name: "Korona norweska" },
    { short: "NZD", name: "Dolar nowozelandzki" },
    { short: "PHP", name: "Peso filipińskie" },
    { short: "PLN", name: "Złoty polski" },
    { short: "RON", name: "Nowa leja rumuńska" },
    { short: "SEK", name: "Krona szwedzka" },
    { short: "SGD", name: "Dolar singapurski" },
    { short: "THB", name: "Baht tajlandzki" },
    { short: "TRY", name: "Dolar Trynidadu/Tobago" },
    { short: "USD", name: "Dolar amerykański" },
    { short: "ZAR", name: "Rand południowoafrykański" },
];