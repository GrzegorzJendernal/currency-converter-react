import Clock from "./Clock";
import { StyledHeader } from "./styled";

const Header = ({title}) => (
	<StyledHeader>
		<Clock/>
		<h1>{title}</h1>
	</StyledHeader>
);

export default Header; 