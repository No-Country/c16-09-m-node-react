import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductsRecent.css";

export default function ProductsRecent() {
  const url = "http://localhost:8000/products/List";

  const [recentProducts, setRecentProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const result = await response.json();
      const recentAdd = result.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      const showRecentAdd = recentAdd.slice(0, 6);
      setRecentProducts(showRecentAdd);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Productos Recien agregados</h1>
      <div className='product-card-container'>
        {recentProducts.map((product) => {
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
