import React from "react";
import { StyledResult } from "./styled";
import { ResultProps } from "../../types/intefaces";

const Result = ({result}: ResultProps) => (
	<StyledResult>
		{result !== undefined ? `${result.amount} PLN = ${result.outcome.toFixed(2)} ${result.currency}` : ""}
	</StyledResult>);

export default Result;