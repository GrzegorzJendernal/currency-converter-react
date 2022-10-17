import { useState, useEffect } from "react";
import { StyledClock } from "./styled";

const Clock = () => {
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

    return (
        <StyledClock>
            Dzisiaj jest {dateToRender}, {timeToRender}
        </StyledClock>
    )
};

export default Clock; 