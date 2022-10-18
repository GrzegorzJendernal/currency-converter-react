import styled from "styled-components";

const Fieldset = styled.fieldset`
    background-color: #cfcfcf;
    margin: 5px;
    padding: 5px;
    border-radius: 10px;
    text-align: center;
`;

const Header = styled.h2`
    font-size: 20px;
    font-weight: bold;
`;

const Button = styled.button`
    margin: 20px auto;
    padding: 10px;
    display: block;
    color: #ffffff;
    background-color: #858585;
    border-radius: 10px;

    &:hover {
        background-color: hsl(0, 0%, 66%);
        transition: 1s;
    }

    &:active {
        background-color: hsl(0, 0%, 35%);
    }
`;

export { Fieldset, Header, Button };