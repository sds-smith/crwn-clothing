import { useSelector, useDispatch } from 'react-redux'

import { CartItemType } from '../../store/cart/cart.types'
import { selectCartItems } from '../../store/cart/cart.selector'
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.action'

import { CheckoutItemContainer, ImageContainer, Name, Quantity, Price, RemoveButton } from './checkout-item.styles'

type CheckoutItemProps = {
    cartItem: CartItemType;
}

const CheckoutItem = ({cartItem}: CheckoutItemProps) => {
    const dispatch = useDispatch()

    const { name, imageUrl, price, quantity } = cartItem
    const cartItems = useSelector(selectCartItems)

    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem))
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem))
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem))

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