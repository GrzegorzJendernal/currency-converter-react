import React from "react";
import { InputProps } from "../../../types/intefaces";
import { StyledInput } from "./styled";

const Input = ({amount, setAmount}: InputProps) => (
	<StyledInput
		value={"" || amount}
		onChange={({target}) => setAmount(target.value)}
		type="number"
		min="0"
		step="0.01"
		required
		placeholder="wpisz posiadaną kwotę"/>
);

export default Input;