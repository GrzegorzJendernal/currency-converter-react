import React, { FormEvent, useState } from "react";
import Input from "./Input";
import Label from "./Label";
import Select from "./Select";
import { Button, Fieldset, Header } from "./styled";
import { useQuery } from "react-query";
import { Rates } from "../../types/data";
import { FormProps, IResult } from "../../types/intefaces";

const Form = ({setResult}: FormProps) => {
	const {data} = useQuery<Rates>("rates");
	const [amount, setAmount] = useState<number | string>("");
	const [currency, setCurrency] = useState("USD");

	const calculateResult = ({amount, currency}: IResult) => {
		const rate = data?.rates[currency];
		if (!rate) return;

		setResult({outcome: +amount * rate, currency, amount});
	};

	const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!amount) return;
		calculateResult({amount: amount, currency} as IResult);
	};

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
						body={
							<Select
								currency={currency}
								setCurrency={setCurrency}
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