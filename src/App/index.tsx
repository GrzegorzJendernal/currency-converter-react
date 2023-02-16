import React, { useState } from 'react';
import Body from "../components/Body";
import Footer from "../components/Footer";
import { GlobalStyle } from "./GlobalStyle";
import Header from "../components/Header";
import Result from "../components/Result";
import { StyleddApp } from "./styled";
import { IResult } from "../types/intefaces";

const App = () => {
	const [result, setResult] = useState<IResult | undefined>(undefined);

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