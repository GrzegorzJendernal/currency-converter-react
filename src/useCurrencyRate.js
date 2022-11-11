import { useState, useEffect } from 'react';
import axios from 'axios';

export const useCurrencyRate = () => {
    const [exchangeRate, setExchangeRate] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            (async () => {
                try {
                    const response = await axios.get("https://api.exchangerate.host/latest?base=PLN&source=ecb&v=_actual_date_");
                    setExchangeRate(response.data);
                } catch (error) {
                    console.log(error);
                }
            })();
        }, "2000");
        return () => clearTimeout(timer);
    }, []);

    return { exchangeRate }
};