import { StyledResult } from "./styled";

const Result = ({ result }) => (
    <StyledResult>
        {result !== undefined ? `${result.amount} PLN = ${result.outcome.toFixed(2)} ${result.currency}` : ""}
    </StyledResult>);

export default Result;