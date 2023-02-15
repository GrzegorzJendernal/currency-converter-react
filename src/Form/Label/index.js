import { StyledLabel } from "./styled";

const Label = ({title, body}) => (
	<p>
		<StyledLabel>
			{title}<br/>
			{body}
		</StyledLabel>
	</p>
);

export default Label;