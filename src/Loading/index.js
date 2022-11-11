import { Wrapper } from "./styled";

const Loading = ({ exchangeRate }) => {
    if (exchangeRate === null)
        return (
            <Wrapper>
                Trwa pobieranie aktualnych kursów walut. <br />
                Proszę czekać.
            </Wrapper >
        );
}

export default Loading;