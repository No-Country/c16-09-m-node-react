import ProductCard from "./ProductCard";
import "./ProductsMostViewed.css";

export default function ProductsOnSale() {
  return (
    <div>
      <h1> Sector Productos en Oferta</h1>
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
