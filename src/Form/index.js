import { useState } from "react";
import Input from "./Input";
import Label from "./Label";
import Select from "./Select";
import { Button, Fieldset, Header } from "./styled";

const Form = ({setResult, exchangeRate}) => {
	const [amount, setAmount] = useState("");
	const [currency, setCurrency] = useState("USD");
	
	const calculateResult = ({amount, currency}) => {
		const rate = exchangeRate.rates[currency];
		setResult({outcome: amount * rate, currency, amount});
	};
	
	const onFormSubmit = (event) => {
		event.preventDefault();
		calculateResult({amount, currency});
	};
	
	if (exchangeRate.success === true)
		return (
			<>
				<form onSubmit={onFormSubmit}>
					<Fieldset>
						<Header>Przelicz swoją walutę!</Header>
						<Label
							title="Ile posiadam w złotych polskich?"
							body={
								<Input
									amount={amount}
									setAmount={setAmount}
								/>
							}
						/>
						<Label
							title="W jakiej walucie chcę otrzymać wynik?"
							body={<Select
								currency={currency}
								setCurrency={setCurrency}
								exchangeRate={exchangeRate}
							/>
							}
						/>
						<Button>Przelicz</Button>
					</Fieldset>
				</form>
			</>
		)
};

export default Form; 