import { CartState } from "../../Context/Context"
import SingleProduct from '../SingleProduct/SingleProduct'
import Filters from '../Filters/Filters'
import './Home.css'
const Home = () => {
  const { state: {products} } = CartState();
  console.log(products)
  return (
    <div className="home">
        <Filters />

        <div className="productContainer">
              { 
                products.map((e,i) => {
                  return <SingleProduct key={i} value={e} /> 
                })
              }
        </div>

    </div>
  )


}

export default Home
