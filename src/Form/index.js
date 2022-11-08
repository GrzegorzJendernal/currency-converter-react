import { Fieldset, Header, Button } from "./styled";
import Label from "./Label";
import Input from "./Input";
import Select from "./Select";
import exchangeRate from "./exchangeRate";
import { useState } from "react";

const Form = ({ setResult, exchange }) => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("USD");

    const calculateResult = ({ amount, currency }) => {
        const rate = exchange.rates[currency];
        setResult({ outcome: amount * rate, currency, amount });
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult({ amount, currency });
    };

    if (exchange !== null)
        return (
            <>
                <form onSubmit={onFormSubmit}>
                    <Fieldset>
                        <Header>Przelicz swoją walutę!</Header>
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
                                exchange={exchange}
                            />
                            }
                        />
                        <Button>Przelicz</Button>
                    </Fieldset>
                </form>
            </>
        )
};

export default Form; 