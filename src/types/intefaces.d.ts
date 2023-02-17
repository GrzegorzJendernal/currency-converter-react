import React from "react";

export interface InputProps {
	amount: number | string;
	setAmount: React.Dispatch<React.SetStateAction<number | string>>;
}

export interface LabelProps {
	title: string;
	body: React.ReactNode;
}

export interface SelectProps {
	currency: string;
	setCurrency: React.Dispatch<React.SetStateAction<string>>;
}

export interface FormProps {
	setResult: React.Dispatch<React.SetStateAction<IResult | undefined>>;
}

export interface IResult {
	outcome: number;
	amount: number;
	originalCurrency: string;
	targetCurrency: string;
}

export interface HeaderProps {
	title: string;
}

export interface ResultProps {
	result: IResult | undefined;
}
