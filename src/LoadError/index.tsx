import React from "react";
import { Wrapper } from "./styled";

const LoadError = () => (
			<Wrapper>
				Ojojoj... Wygląda, że coś poszło nie tak jak powinno. {"\n"}
				Sprawdź swoje połączenie z internetem. 📶{"\n"}
				Jeśli u Ciebie wszystko jest w porządku, to wygląda na to, że to nasza wina. {"\n"}
				Przepraszamy za problemy i może spróbuj ponownie później? 😉
			</Wrapper>
		);

export default LoadError;