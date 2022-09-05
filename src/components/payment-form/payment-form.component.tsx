import { useState, FormEvent } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { StripeCardElement } from "@stripe/stripe-js";
import { useSelector, useDispatch } from "react-redux";

import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { resetCart } from "../../store/cart/cart.action";

import {BUTTON_TYPE_CLASSES} from "../button/button.component";
import { PaymentFormContainer, FormContainer, PaymentButton, TestMessage } from "./payment-form.styles";

const isValidCardElement = (card: StripeCardElement | null): card is StripeCardElement => card !== null

const PaymentForm = () => {
    const dispatch = useDispatch()

    const stripe = useStripe()
    const elements = useElements()
    const amount = useSelector(selectCartTotal)
    const currentUser = useSelector(selectCurrentUser)
    const [isProcessingPayment, setIsProcessingPayment] = useState(false)

    const paymentHandler = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault()

        if (!stripe || !elements) {
            return
        }
        setIsProcessingPayment(true)
        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: amount * 100 })
        }).then((res) => res.json())

        const clientSecret = response.paymentIntent.client_secret

        const cardElement = elements.getElement(CardElement)

        const paymentResult = isValidCardElement(cardElement) && await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardElement,
                billing_details: {
                    name: currentUser ? currentUser.displayName : 'Guest'
                }
            }
        })

        setIsProcessingPayment(false)

        if (paymentResult) {
            if (paymentResult.error) {
                alert(paymentResult.error)
            } else {
                if (paymentResult.paymentIntent.status === 'succeeded') {
                    dispatch(resetCart())
                    cardElement.clear()
                    alert('Payment Successful')
                }
            }
        }

    }

    return (
        <PaymentFormContainer >
            <FormContainer onSubmit={paymentHandler} >
                <h2>Credit Card Payment:</h2>
                <div className="message-container" >
                    <TestMessage >Please use the following test card only:</TestMessage>
                    <TestMessage >Card #: 4242 4242 4242 4242 | exp:04/24 | CVC: 242 | ZIP: 42424</TestMessage>
                </div>
                <CardElement />
                <PaymentButton isLoading={isProcessingPayment} buttonType={BUTTON_TYPE_CLASSES.inverted} >Pay Now</PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    )
}

export default PaymentForm