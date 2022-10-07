import "./style.css";
import exchangeRate from "./exchangeRate";

const Form = ({ calculateResult, amount, currency, setAmount, setCurrency }) => {
    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult({ amount, currency });
    };

    return (
        <>
            <form className="form" onSubmit={onFormSubmit}>
                <fieldset className="form__field">
                    <h1 className="form__header">Przelicz swoją walutę!</h1>
                    <p>
                        <label className="form__label">
                            Ile posiadam w złotych polskich?<br />
                            <input
                                value={amount}
                                onChange={({ target }) => setAmount(target.value)}
                                type="number"
                                min="0"
                                tep="0.01"
                                required
                                placeholder="wpisz wartość w PLN" />
                        </label>
                    </p>
                    <p>
                        <label className="form__label">
                            W jakiej walucie chcę otrzymać wynik?<br />
                            <select
                                value={currency}
                                onChange={({ target }) => setCurrency(target.value)}>
                                {exchangeRate.map((currency) => (
                                    <option
                                        key={currency.shortcut}
                                        value={currency.shortcut}>
                                        {currency.name} - {currency.shortcut}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </p>
                    <button className="form__button">Przelicz</button>
                </fieldset>
            </form>
        </>
    )
};

export default Form; 