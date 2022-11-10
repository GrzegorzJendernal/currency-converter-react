import { useState, useEffect } from 'react';
import axios from 'axios';

export const useCurrencyRate = () => {
    const [exchangeRate, setExchangeRate] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            (async () => {
                try {
                    const response = await axios.get("https://api.exchangerate.host/latest?base=PLN&source=ecb&");
                    setExchangeRate(response.data);
                } catch (error) {
                    console.log(error);
                }
            })();
        }, "1000");
        return () => clearTimeout(timer);
    }, []);

    return { exchangeRate }
};