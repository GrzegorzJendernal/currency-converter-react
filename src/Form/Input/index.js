const Input = ({ amount, setAmount }) => (
    <input
        value={amount}
        onChange={({ target }) => setAmount(target.value)}
        type="number"
        min="0"
        tep="0.01"
        required
        placeholder="wpisz wartość w PLN" />
);

export default Input;