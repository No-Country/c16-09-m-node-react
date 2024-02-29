import axios from "axios";
import ProductCard from "./ProductCard";
import "./ProductsMostViewed.css";
import { useEffect, useState } from "react";

export default function ProductsOnSale() {
  const [products, setProducts] = useState([]);
  const url = "http://localhost:8000/products/List";

  const getProducts = async () => {
    try {
      const response = await axios.get(url);
      const filteredProducts = response.data.filter((product) => product.offers);
      setProducts(filteredProducts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>Productos en Oferta</h1>
      <div className='product-card-container'>
        {products.map((product) => (
          <div key={product.id} className='product-card'>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
