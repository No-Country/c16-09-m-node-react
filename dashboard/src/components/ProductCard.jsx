import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const {
    name,
    Category: { name: categoryName },
    price,
    company,
    description,
  } = product;

  return (
    <div className='product-card'>
      <div className='product-image'>
        <img src={product.image} alt='ImagenDefault' />
      </div>
      <div className='product-details'>
        <h3 className='product-name'>{name}</h3>
        <p className='product-info'>Rubro: {categoryName}</p>
        <p className='product-info'>Precio: ${price}</p>
        <p className='product-info'>Comercio: {company}</p>
        <p className='product-info'>Descripcion: {description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
