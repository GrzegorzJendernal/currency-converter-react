import { currencies } from "../../useCurrencyRate";
import { Wrapper } from "./styled";

const Select = ({ currency, setCurrency, exchangeRate }) => {
    const name = currencies.find(({ short }) => short === currency);
    return (
        <Wrapper><select
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}>
            {Object.keys(exchangeRate.rates).map((currency) => (
                <option
                    key={currency}
                    value={currency}>
                    {currency}
                </option>
            ))}
        </select> {name.name}
        </Wrapper >
    );
};

export default Select;