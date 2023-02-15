import { currencies } from "../../currencies";
import { Wrapper } from "./styled";

const Select = ({currency, setCurrency, exchangeRate}) => {
	const name = currencies.find(({short}) => short === currency);
	return (
		<Wrapper>
			{name.name}
			<select
				value={currency}
				onChange={({target}) => setCurrency(target.value)}>
				{Object.keys(exchangeRate.rates).map((currency) => (
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