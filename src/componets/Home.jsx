import React from 'react'
import { CartState } from '../context/Context'
import Filters from './Filters';
import SingleProduct from './SingleProduct';
import "./style.css"
function Home() {

  const { 
    state : { products },
   }   = CartState();

  console.log( "state",products)
  return (
    <div className="home">
      <Filters/>
      <div className="productContainer">
        {products.map((prod) => {
        return <SingleProduct  prod = {prod}  key = {prod.id} />
        })}
      </div>
    </div>
  );
}

export default Home