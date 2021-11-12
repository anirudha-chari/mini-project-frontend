import { CardContainer, CategoryCard, ProductCard } from "../UI/Card"
import medicine from '../../images/medicine.png'
import productAPI  from "../../mockdb"

export const HomePane = props => {
    const {products} = productAPI
    return (
        <section>
            <CardContainer title="Shop by health conditions">
                <CategoryCard logo={medicine}/>
                <CategoryCard logo={medicine}/>
                <CategoryCard logo={medicine}/>
                <CategoryCard logo={medicine}/>
                <CategoryCard logo={medicine}/>
                <CategoryCard logo={medicine}/>
                <CategoryCard logo={medicine}/>
                <CategoryCard logo={medicine}/>
            </CardContainer>
            <CardContainer title="Best sellers">
            {products.map(product => {
                        return  <ProductCard logo={product.logo} id={product.id} key={product.id}/>
                    })}
            </CardContainer>
        </section>
    )
}