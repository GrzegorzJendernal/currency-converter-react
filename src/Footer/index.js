import { useQuery } from "react-query";
import { StyledFooter } from "./styled";

const Footer = () => {
	const {data} = useQuery("rates");
	if (!data) return;
		return (
			<StyledFooter>Kurs walut pobrany z Europejskiego Banku Centralnego, aktualny na dzień: {data.date}
			</StyledFooter>
		);
};

export default Footer; 