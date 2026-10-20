import { useEffect } from "react";
import { useState } from "react";

function App() {
   const [productCount,setProductCount]=useState(0);
   const [products,setProducts]=useState([]);
   
  useEffect(()=>{async function getData() {
      let response = await fetch("https://dummyjson.com/products?limit=0");
      let data =await response.json();
      setProductCount(data.products.length);
      setProducts(data.products)
    }
  getData()},[])
       
  return (
    <div>
      <p>No of Products : {productCount}</p>
      <ul>
        {products.map((p)=><li key={p.id}>{p.title}</li>)}
      </ul>
    </div>
  )
}

export default App