import ProductCard from "./ProductCard";
import "./ProductsMostViewed.css";

export default function MostViewedProducts() {
  return (
    <div>
      <h1> Sector Productos mas Buscados</h1>
      <div className='product-card-container'>
        <div className='product-card'>
          <ProductCard />
        </div>
        <div className='product-card'>
          <ProductCard />
        </div>
        <div className='product-card'>
          <ProductCard />
        </div>
      </div>
    </div>
  );
}
