import "./style.css";
import Label from "./Label";
import Input from "./Input";
import Select from "./Select";
import exchangeRate from "./exchangeRate";
import { useState } from "react";

const Form = ({ setResult }) => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(exchangeRate[0].shortcut);

    const calculateResult = ({ amount, currency }) => {
        const rate = exchangeRate.find(({ shortcut }) => shortcut === currency).rate;
        setResult({ outcome: amount / rate, currency, amount });
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult({ amount, currency });
    };

    return (
        <>
            <form className="form" onSubmit={onFormSubmit}>
                <fieldset className="form__field">
                    <h1 className="form__header">Przelicz swoją walutę!</h1>
                    <Label
                        title="Ile posiadam w złotych polskich?"
                        body={
                            <Input
                                amount={amount}
                                setAmount={setAmount}
                            />
                        }
                    />
                    <Label
                        title="W jakiej walucie chcę otrzymać wynik?"
                        body={<Select
                            currency={currency}
                            setCurrency={setCurrency}
                            exchangeRate={exchangeRate}
                        />
                        }
                    />
                    <button className="form__button">Przelicz</button>
                </fieldset>
            </form>
        </>
    )
};

export default Form; 