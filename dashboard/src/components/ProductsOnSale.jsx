import ProductCard from "./ProductCard";
import "./ProductsMostViewed.css";
import { useEffect, useState } from "react";

export default function ProductsOnSale() {
  const url = "http://localhost:8000/products/List";

  const [productsOnSale, setproductsOnSale] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const result = await response.json();
      const onSale = result.filter((product) => product.offers === true);
      setproductsOnSale(onSale);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Productos en Oferta</h1>
      <div className='product-card-container'>
        {productsOnSale.map((product) => {
          return (
            <div key={product.id} className='product-card'>
              <ProductCard product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
