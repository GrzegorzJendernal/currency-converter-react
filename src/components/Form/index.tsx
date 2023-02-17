import React, { FormEvent, useState } from "react";
import Input from "./Input";
import Label from "./Label";
import Select from "./Select";
import { Button, Fieldset, Header } from "./styled";
import { useQuery } from "react-query";
import { Rates } from "../../types/data";
import { FormProps, IResult } from "../../types/intefaces";
import { useRate } from "../../dataFiles/useRate";

const Form = ({setResult}: FormProps) => {
	const {data} = useQuery("rates") as Rates;
	const [amount, setAmount] = useState<number | string>("");
	const [originalCurrency, setOriginalCurrency] = useState("PLN");
	const [targetCurrency, setTargetCurrency] = useState("USD");
	const rate = useRate({data}, originalCurrency, targetCurrency);

	const calculateResult = ({amount, originalCurrency, targetCurrency}: IResult) => {
		setResult({outcome: +amount * rate, originalCurrency, targetCurrency, amount});
	};

	const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!amount) return;
		calculateResult({amount: amount, originalCurrency, targetCurrency} as IResult);
	};

	return (
		<>
			<form onSubmit={onFormSubmit}>
				<Fieldset>
					<Header>Przelicz swoją walutę!</Header>
					<Label
						title="Kwota, którą posiadam?"
						body={
							<Input
								amount={amount}
								setAmount={setAmount}
							/>
						}
					/>
					<Label
						title="Z jakiej waluty chcę przeliczyć?"
						body={
							<Select
								currency={originalCurrency}
								setCurrency={setOriginalCurrency}
							/>
						}
					/>
					<Label
						title="W jakiej walucie chcę otrzymać wynik?"
						body={
							<Select
								currency={targetCurrency}
								setCurrency={setTargetCurrency}
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