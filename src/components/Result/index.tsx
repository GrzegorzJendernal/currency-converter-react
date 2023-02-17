import React from "react";
import { StyledResult } from "./styled";
import { ResultProps } from "../../types/intefaces";

const Result = ({result}: ResultProps) => (
	<StyledResult>
		{result !== undefined ? `${result.amount} ${result.originalCurrency} = ${result.outcome.toFixed(2)} ${result.targetCurrency}` : ""}
	</StyledResult>);

export default Result;