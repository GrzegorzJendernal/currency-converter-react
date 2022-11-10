import { StyledFooter } from "./styled";

const Footer = ({ exchangeRate }) => {
    if (exchangeRate !== null)
        return (
            <StyledFooter>Kurs walut pobrany z Europejskiego Banku Centralnego, aktualny na dzień: {exchangeRate.date}
            </StyledFooter>
        );
}

export default Footer; 