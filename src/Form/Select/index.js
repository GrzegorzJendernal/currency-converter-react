const Select = ({ currency, setCurrency, exchange }) =>
(
    <select
        value={currency}
        onChange={({ target }) => setCurrency(target.value)}>
        {Object.keys(exchange.rates).map((currency) => (
            <option
                key={currency}
                value={currency}>
                {currency}
            </option>
        ))}
    </select>
);

export default Select;