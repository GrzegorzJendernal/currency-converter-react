import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Result from "./Result";

function App() {
  const [result, setResult] = useState(undefined);

  return (
    <>
      <Header
        title="Kalkulator walutowy" />
      <Form
        setResult={setResult}
      />
      <Result
        result={result} />
      <Footer />
    </>
  );
};

export default App;