import React from "react";
import { StyledLabel } from "./styled";
import { LabelProps } from "../../../types/intefaces";

const Label = ({title, body}: LabelProps) => (
	<p>
		<StyledLabel>
			{title + "\n"}
			{body}
		</StyledLabel>
	</p>
);

export default Label;