import { useContext } from "react"
import { DataContext } from "./Context"
import { Link } from "react-router-dom";
import formatCurrency from '../util'



function Products() {
  const value = useContext(DataContext)
  const [products, setProducts] = value.products;
  console.log(products)


  return (
    <div className="products">
      {
        products.map(product => (
          <div className="card" key={product._id}>
            <Link to={`products/${product.id}`}>
              <img src={product.images[0]}></img>
            </Link>
            <div className="box">
              <h3>
                <Link to={`/products/${product.id}`}>{product.title}</Link>
              </h3>
              <p>{product.description}</p>
              <h4>{formatCurrency(product.price)} </h4>
              <button>افزودن به سبد خرید</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Products
