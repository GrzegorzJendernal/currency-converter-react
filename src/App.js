import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Result from "./Result";
import { StyleddApp } from "./styled";
import { useCurrencyRate } from "./useCurrencyRate";

function App() {
  const [result, setResult] = useState(undefined);
  const { exchangeRate } = useCurrencyRate();

  return (
    <StyleddApp>
      <Header
        title="Kalkulator walutowy" />
      <Form
        setResult={setResult}
        exchangeRate={exchangeRate}
      />
      <Result
        result={result}
      />
      <Footer exchangeRate={exchangeRate} />
    </StyleddApp>
  );
};

export default App;