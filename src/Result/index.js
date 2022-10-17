import { StyledResult } from "./styled";

const Result = ({ result }) => {
    if (result !== undefined)
        return (
            <StyledResult>
                {result.amount} PLN = {result.outcome.toFixed(2)} {result.currency}
            </StyledResult>);
}

export default Result;