import { CardContainer, CategoryCard, ProductCard } from "../UI/Card"
import { Navbar } from "../UI/NavBar"
import medicine from '../../images/medicine.png'

export const HomePane = props => {
    return (
        <section>
            <CardContainer title="shop by health conditions">
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
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </CardContainer>
        </section>
    )
}