import ProductCard from '../product-card/product-card.component'
import { CategoryItemType } from '../../store/categories/category.types'; 
import  { CategoryPreviewContainer, Preview, TitleLink } from './category-preview.styles'

type CategoryPreviewProps = {
    title: string;
    products: CategoryItemType[];
}

const CategoryPreview = ({ title, products }: CategoryPreviewProps) => {
    return (
        <CategoryPreviewContainer >
            <h2>
                <TitleLink className='title' to={`${title}#`} >{title.toUpperCase()}</TitleLink>
            </h2>
            <Preview >
                {
                    products.filter((_, index) => index < 4)
                    .map((product) => <ProductCard key={product.id} product={product}/> )
                }
            </Preview>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview