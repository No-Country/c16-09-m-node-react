import "./ProductCard.css";
import defaultProductImage from "../assets/images/products/defaul-product-image.jpeg";

const ProductCard = () => {
  return (
    <div className='product-card'>
      <div className='product-image'>
        <img src={defaultProductImage} alt='ImagenDefault' />
      </div>
      <div className='product-details'>
        <h3 className='product-name'>Harina</h3>
        <p className='product-info'>Rubro: Almacén</p>
        <p className='product-info'>Precio: $990</p>
        <p className='product-info'>Comercio: La Anónima</p>
      </div>
    </div>
  );
};

export default ProductCard;
