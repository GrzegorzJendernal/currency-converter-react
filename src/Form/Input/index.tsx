import React from "react";
import { InputProps } from "../../types/intefaces";

const Input = ({amount, setAmount}: InputProps) => (
	<input
		value={"" || amount}
		onChange={({target}) => setAmount(target.value)}
		type="number"
		min="0"
		step="0.01"
		required
		placeholder="wpisz wartość w PLN"/>
);

export default Input;