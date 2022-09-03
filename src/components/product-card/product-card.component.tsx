import { useDispatch, useSelector } from 'react-redux'

import { CartItemType } from '../cart-item/cart-item.component'
import { selectCartItems } from '../../store/cart/cart.selector'
import { addItemToCart } from '../../store/cart/cart.action'
import { ProductCardContainer, AddToCartButton, Footer, Name, Price } from './product-card.styles'
import { BUTTON_TYPE_CLASSES } from '../button/button.component'

type ProductCardProps = {
    product: CartItemType
}

const ProductCard = ({ product }: ProductCardProps) => {
    const { name, price, imageUrl } = product
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch()

    const addProductToCart = () => dispatch(addItemToCart(cartItems, product))

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={name}/>
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <AddToCartButton buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={ addProductToCart} >Add to cart</AddToCartButton>
        </ProductCardContainer>
    )
}

export default ProductCard