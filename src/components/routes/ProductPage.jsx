import productAPI from '../../mockdb'
import { CardContainer } from '../UI/Card'
import { Product } from '../UI/Product'
import { ProductCard } from '../UI/Card'
import { useParams } from 'react-router';

export const ProductPage = props => {
    const params = useParams()
    console.log(params)
    const product = productAPI.get(parseInt(params.id))
    const {products} = productAPI
    return (
        <div>
            <Product logo={product.logo} name={product.name}/>
            <CardContainer title="Similar products">
                {products.map(product => {
                    return <ProductCard logo={product.logo} id={product.id} />
                })}
            </CardContainer>
        </div>
    )
}