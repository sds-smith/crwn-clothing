import { useState, useEffect, Fragment } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import ProductCard from '../../components/product-card/product-card.component'
import Spinner from '../../components/spinner/spinner.component'
import { CategoryItemType } from '../../store/categories/category.types' 
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/category.selector'
import { CategoryContainer, CategoryTitle } from './category.styles'

const Category = () => {
    const { category } = useParams()
    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectCategoriesIsLoading)
    
    const productsArray: CategoryItemType[] = []
    const [products, setProducts] = useState(productsArray)

    useEffect(() => {
        category && setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <Fragment>
            <CategoryTitle>{category && category.toUpperCase()}</CategoryTitle>
            {
                isLoading ? (
                    <Spinner />
                ) : (
                    <CategoryContainer >
                        { products &&
                            products.map((product: CategoryItemType) => <ProductCard key={product.id} product={product} />)
                        }
                    </CategoryContainer>    
                )
            }
        </Fragment>

    )
}

export default Category