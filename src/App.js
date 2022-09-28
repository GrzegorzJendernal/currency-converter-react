import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Result from "./Result";

function App() {
  return (
    <>
      <Header title="Kalkulator walutowy" />
      <Form />
      <Result />
      <Footer />
    </>
  );
};

export default App;
