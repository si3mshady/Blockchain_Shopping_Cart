import { CartState } from "../../Context/Context"

const Home = () => {
  const { state: {products} } = CartState();
  console.log(products)
  return (
    <div className="home">
        {/* Filters */}

        <div className="productContainer">
              { 
                products.map((e,i) => {
                  return <div> {e.name} </div>
                })
              }
        </div>

    </div>
  )


}

export default Home
