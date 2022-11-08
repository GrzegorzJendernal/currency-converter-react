import React, { useState, useEffect } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Result from "./Result";
import axios from 'axios';

function App() {
  const [result, setResult] = useState(undefined);
  const [exchange, setExchange] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      (async () => {
        try {
          const response = await axios.get("https://api.exchangerate.host/latest?base=PLN&source=ecb");
          setExchange(response.data);
        } catch (error) {
          console.log(error);
        }
      })();
    }, "1000");
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      <Header
        title="Kalkulator walutowy" />
      <Form
        setResult={setResult}
        exchange={exchange}
      />
      <Result
        result={result}
      />
      <Footer exchange={exchange} />
    </>
  );
};

export default App;