import React from "react";
import { useQuery } from "react-query";
import { StyledFooter } from "./styled";
import { Rates } from "../../types/data";

const Footer = () => {
	const {data} = useQuery<Rates>("rates");
	if (!data) return (<></>);
	return (
		<StyledFooter>Kurs walut pobrany z Europejskiego Banku Centralnego, aktualny na dzień: {data.date}
		</StyledFooter>
	);
};

export default Footer; 