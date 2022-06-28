import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const FormContainer = styled.form`
    height: 100px;
    min-width: 500px;

    .message-container {
        margin-bottom: 20px;
    }

    @media only screen and (max-width: 800px) {
        min-width: unset;
    }
`

export const PaymentButton = styled(Button)`
    margin-left: auto;
    margin-top: 30px;
`

export const TestMessage = styled.div`
    font-size: 20px;
    color: red;
`