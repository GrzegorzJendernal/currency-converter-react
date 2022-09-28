import "./style.css";
import exchangeRate from "./exchangeRate";
import { useState } from "react";

const Form = () => {
    const [currency, setCurrency] = useState(exchangeRate);
    const [amount, setAmount] = useState("");
    return (
        <>
            <form className="form">
                <fieldset className="form__field">
                    <h1 className="form__header">Przelicz swoją walutę!</h1>
                    <p>
                        <label className="form__label">Ile posiadam w złotych polskich?<br />
                            <input
                                value={amount}
                                type="number"
                                min="0"
                                step="0.01"
                                required
                                placeholder="wpisz wartość w PLN"
                                onChange={({ target }) => setAmount(target.value)} />
                        </label>
                    </p>
                    <p>
                        <label className="form__label">W jakiej walucie chcę otrzymać wynik?<br />
                            <select name="currency">
                                {exchangeRate.map((currency => (
                                    <option
                                        key={currency.id}
                                        value={currency.shortcut}
                                    >
                                        {currency.name} - {currency.shortcut}
                                    </option>
                                )))}
                            </select>
                        </label>
                    </p>
                    <button className="form__button">Przelicz</button>
                </fieldset>
            </form>
            <p className="form__result">
                Mając: {amount} PLN otrzymam: <span className="form__result--value">...</span>
            </p>
        </>
    )
};

export default Form; 