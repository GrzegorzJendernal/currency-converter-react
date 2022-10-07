import "./style.css";

const Result = ({ result }) => {
    if (result !== 0)
        return (
            <p className="result">
                Posiadając {result.amount} PLN otrzymam: {result.outcome.toFixed(2)} {result.currency}
            </p>);
}

export default Result;