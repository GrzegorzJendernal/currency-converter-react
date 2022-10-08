const Select = ({ currency, setCurrency, exchangeRate }) => (
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
);

export default Select;