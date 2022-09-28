import "./style.css";

const Form = () => (
    <form className="form">
        <fieldset className="form__field">
            <h1 className="form__header">Przelicz swoją walutę!</h1>
            <p>
                <label className="form__label">Ile posiadam w złotych polskich?<br />
                    <input
                        type="number"
                        min="0"
                        step="0.01"
                        required
                        placeholder="wpisz wartość w PLN"
                    />
                </label>
            </p>
            <p>
                <label className="form__label">W jakiej walucie chcę otrzymać wynik?<br />
                    <select name="currency">
                        <option value="EUR">Euro (EUR)</option>
                        <option value="USD">Dolar amerykański (USD)</option>
                        <option value="COP">Peso kolumbijskie (COP)</option>
                    </select>
                </label>
            </p>
            <button className="form__button" type="submit">Przelicz</button>
        </fieldset>
    </form>

);

export default Form; 