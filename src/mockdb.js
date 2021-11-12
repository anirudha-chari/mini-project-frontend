import medicine from './images/medicine.png'
import nutrition from './images/nutrition.png'
import personalCare from './images/personalCare.png'
import sanitize from './images/sanitize.jpg'
import coronavirus from './images/coronavirus.png'
import logo from './logo.svg'

const productAPI = {

    products: [
        {
            name: 'Product name',
            logo: medicine,
            id:1,
        },
        {
            name: 'Product name',
            logo: nutrition,
            id:2,
        },
        {
            name: 'Product name',
            logo: personalCare,
            id:3,
        },
        {
            name: 'Product name',
            logo: sanitize,
            id:4,
        },
        {
            name: 'Product name',
            logo: coronavirus,
            id:5,
        },
        {
            name: 'Product name',
            logo: logo,
            id:6,
        },
        {
            name: 'Product name',
            logo: logo,
            id:7,
        },
        
    ],

    get : function(id){
        const isProduct = prod=>prod.id === id
        return this.products.find(isProduct)
    }
}

export default productAPI