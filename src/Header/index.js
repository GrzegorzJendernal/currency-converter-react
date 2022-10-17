import { StyledHeader } from "./styled";
import Clock from "./Clock";

const Header = ({ title }) => (
    <StyledHeader>
        <Clock />
        <h1>{title}</h1>
    </StyledHeader>
);

export default Header; 