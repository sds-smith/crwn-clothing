import { CartItemType } from '../../store/cart/cart.types';

import { CartItemContainer, ItemDetails } from './cart-item.styles'

type CartItemProps = {
    cartItem: CartItemType;
}

const CartItem = ({ cartItem }: CartItemProps) => {
    const {  name, quantity, imageUrl, price }  = cartItem
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={name} />
            <ItemDetails >
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem