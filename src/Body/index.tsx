import React from "react";
import { useQuery } from "react-query";
import Form from "../Form";
import LoadError from "../LoadError";
import Loading from "../Loading";
import { FormProps } from "../types/intefaces";

const Body = ({setResult}: FormProps) => {
	const {isLoading, isError} = useQuery("rates")
	if (isLoading) return <Loading/>;
	if (isError) return <LoadError/>;
	return <Form
		setResult={setResult}
	/>
};
export default Body;