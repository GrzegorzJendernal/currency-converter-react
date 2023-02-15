import React, { useState } from 'react';
import Body from "./Body";
import Footer from "./Footer";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./Header";
import Result from "./Result";
import { StyleddApp } from "./styled";


function App() {
	const [result, setResult] = useState(undefined);
	
	return (
		<>
		<GlobalStyle/>
		<StyleddApp>
			<Header
				title="Kalkulator walutowy"
			/>
			<Body setResult={setResult}/>
			<Result
				result={result}
			/>
			<Footer/>
		</StyleddApp>
			</>
	);
}

export default App;