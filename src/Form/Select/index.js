import { currencies } from "../../useCurrencyRate";

const Select = ({ currency, setCurrency, exchangeRate }) => (
    <select
        value={currency}
        onChange={({ target }) => setCurrency(target.value)}>
        {Object.keys(exchangeRate.rates).map((currency) => (
            <option
                key={currency}
                value={currency}>
                {currency}
            </option>
        ))}
    </select>
);

export default Select;