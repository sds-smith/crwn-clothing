import { CartItemContainer, ItemDetails } from './cart-item.styles'

export type CartItemType = {
    id: number;
    imageUrl: string;
    name: string;
    price: number;
    quantity?: number;
}

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