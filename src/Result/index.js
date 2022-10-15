import "./style.css";

const Result = ({ result }) => {
    if (result !== undefined)
        return (
            <p className="result">
                {result.amount} PLN = {result.outcome.toFixed(2)} {result.currency}
            </p>);
}

export default Result;