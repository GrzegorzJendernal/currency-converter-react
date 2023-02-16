import React from "react";
import Clock from "./Clock";
import { StyledHeader } from "./styled";
import { HeaderProps } from "../../types/intefaces";

const Header = ({title}: HeaderProps) => (
	<StyledHeader>
		<Clock/>
		<h1>{title}</h1>
	</StyledHeader>
);

export default Header; 