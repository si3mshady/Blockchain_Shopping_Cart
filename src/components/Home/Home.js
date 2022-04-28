import { CartState } from "../../Context/Context"
import SingleProduct from '../SingleProduct/SingleProduct'

const Home = () => {
  const { state: {products} } = CartState();
  console.log(products)
  return (
    <div className="home">
        {/* Filters */}

        <div className="productContainer">
              { 
                products.map((e,i) => {
                  return <SingleProduct value={e} /> 
                })
              }
        </div>

    </div>
  )


}

export default Home
