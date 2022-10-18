import { useState, useEffect } from "react";

export const useCurrentDate = () => {
    const [myDate, setMyDate] = useState(new Date());

    const dateToRender = myDate.toLocaleDateString(undefined, {
        month: "long",
        weekday: "long",
        day: "numeric",
        year: "numeric",
    });

    const timeToRender = myDate.toLocaleTimeString(undefined, {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setMyDate(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return {
        dateToRender,
        timeToRender,
    }
};