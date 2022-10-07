import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import exchangeRate from "./Form/exchangeRate";
import Result from "./Result";

function App() {
  const [result, setResult] = useState(0);
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(exchangeRate[0].shortcut);

  const calculateResult = ({ amount, currency }) => {
    const rate = exchangeRate.find(({ shortcut }) => shortcut === currency).rate;
    setResult({ outcome: amount / rate, currency, amount });
  };

  return (
    <>
      <Header title="Kalkulator walutowy" />
      <Form
        calculateResult={calculateResult}
        amount={amount}
        setAmount={setAmount}
        result={result}
        setResult={setResult}
        currency={currency}
        setCurrency={setCurrency} />
      <Result
        amount={amount}
        currency={currency}
        result={result} />
      <Footer />
    </>
  );
};

export default App;
