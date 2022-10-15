import { useState } from "react";

const Clock = () => {
    const [myDate, setMyDate] = useState(new Date());
    const dateToRender = myDate.toLocaleDateString(undefined, {
        month: "long",
        weekday: "long",
        day: "numeric",
        year: "numeric",
    });
    const hourToRender = myDate.toLocaleTimeString(undefined, {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    });
    setInterval(() => { setMyDate(new Date()) }, 1000);
    return (
        <span className="header__clock">
            Dzisiaj jest {dateToRender}, {hourToRender}
        </span>
    )
};

export default Clock; 