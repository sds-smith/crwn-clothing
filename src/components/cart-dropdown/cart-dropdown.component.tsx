import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { CartItemType } from '../../store/cart/cart.types'
import { selectCartItems, selectIsCartOpen } from '../../store/cart/cart.selector'
import { setIsCartOpen } from '../../store/cart/cart.action'

import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles'

const CartDropdown = () => {
    const dispatch = useDispatch()

    const isCartOpen = useSelector(selectIsCartOpen)
    const cartItems: CartItemType[] = useSelector(selectCartItems)
    const navigate = useNavigate()

    const goToCheckoutHandler = () => {
        dispatch(setIsCartOpen(!isCartOpen))
        navigate('/checkout')
    }




    return (
        <CartDropdownContainer >
            <CartItems >
                {
                  cartItems.length ? (cartItems.map(item => (
                  <CartItem cartItem={item} key={item.id} />
                  ))) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                  )
                }
            </CartItems>
            <Button onClick={goToCheckoutHandler} >GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown