import { CartState } from "../../Context/Context"
import SingleProduct from '../SingleProduct/SingleProduct'
import Filters from '../Filters/Filters'
import './Home.css'


// const {filterDispatch, filterState: {sort, searchQuery,inStock,price,year,rating}} = CartState() 


const Home = () => {
  const { state: {products},
filterDispatch, filterState: {sort, searchQuery,inStock,price,year,rating}} = CartState() 


  const transformedProducts = () => {

  let sortedProducts = products

  if (sort) {
    sortedProducts = sortedProducts.sort((a,b) => 
    sort === "lowToHigh" ? a.price - b.price : b.price - a.price )

  }

  if (inStock) {
    sortedProducts = sortedProducts.filter(element => element.inStock === true)
  }
  
  return sortedProducts
  }
  // console.log(products)
  return (
    <div className="home">
        <Filters />

        <div className="productContainer">
              { 
                transformedProducts().map((e,i) => {
                  return <SingleProduct key={i} value={e} /> 
                })
              }
        </div>

    </div>
  )


}

export default Home
