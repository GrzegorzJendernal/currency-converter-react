import React from "react";
import { StyledClock } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {
	const {myDate} = useCurrentDate();

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

	return (
		<StyledClock>
			Dzisiaj jest {dateToRender}, {timeToRender}
		</StyledClock>
	)
};

export default Clock; 