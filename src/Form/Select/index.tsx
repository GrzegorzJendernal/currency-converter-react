import { currencies } from "../../currencies";
import { Wrapper } from "./styled";
import React from "react";
import { useQuery } from "react-query";
import { Rates } from "../../types/data";
import { SelectProps } from "../../types/intefaces";

const Select = ({currency, setCurrency}: SelectProps) => {
	const {data} = useQuery<Rates>("rates");
	const name = currencies.find(({short}) => short === currency);
	if (!name || !data) return (<></>);

	return (
		<Wrapper>
			{name.name}
			<select
				value={currency}
				onChange={({target}) => setCurrency(target.value)}>
				{Object.keys(data.rates).map((currency) => (
					<option
						key={currency}
						value={currency}>
						{currency}
					</option>
				))}
			</select>
		</Wrapper>
	);
};

export default Select;