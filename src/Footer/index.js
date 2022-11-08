import { StyledFooter } from "./styled";

const Footer = ({ exchange }) => {
    if (exchange !== null)
        return (
            <StyledFooter>Kurs walut pobrany z Europejskiego Banku Centralnego, aktualny na dzień: {exchange.date}
            </StyledFooter>
        );
}

export default Footer; 