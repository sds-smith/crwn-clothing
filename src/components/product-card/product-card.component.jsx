import { useContext } from 'react'

import { ProductCardContainer, AddToCartButton, Footer, Name, Price } from './product-card.styles'
import { BUTTON_TYPE_CLASSES } from '../button/button.component'
import { CartContext } from '../../contexts/cart.context'

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product
    const { addItemToCart } = useContext(CartContext)

    const addProductToCart = () => addItemToCart(product)

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