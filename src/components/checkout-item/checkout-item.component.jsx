import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import { CheckoutItemContainer, ImageContainer, Name, Quantity, Price, RemoveButton } from './checkout-item.styles'

const CheckoutItem = ({cartItem}) => {
    const { name, imageUrl, price, quantity } = cartItem
    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext)

    const clearItemHandler = () => clearItemFromCart(cartItem)
    const addItemHandler = () => addItemToCart(cartItem)
    const removeItemHandler = () => removeItemFromCart(cartItem)

    return (
        <CheckoutItemContainer >
            <ImageContainer >
                <img src={imageUrl} alt={name} />
            </ImageContainer>
            <Name >{name}</Name>
            <Quantity >
                <span className='arrow' onClick={removeItemHandler} >&#10094;</span>
                <span className='value' >{quantity}</span>
                <span className='arrow' onClick={addItemHandler} >&#10095;</span>
            </Quantity>
            <Price >{price}</Price>
            <RemoveButton onClick={clearItemHandler} >&#10005;</RemoveButton>

        </CheckoutItemContainer>
    )
}

export default CheckoutItem