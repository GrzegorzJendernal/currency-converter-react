import { Wrapper } from "./styled";

const LoadError = ({ exchangeRate }) => {
    if (exchangeRate === "error")
        return (
            <Wrapper>
                Ojojoj... Wygląda, że coś poszło nie tak jak powinno. <br />
                Sprawdź swoje połączenie z internetem. 📶<br />
                Jeśli u Ciebie wszystko jest w porządku, to wygląda na to, że to nasza wina. <br />
                Przepraszamy za problemy i może spróbuj ponownie później? 😉
            </Wrapper >
        );
};

export default LoadError;