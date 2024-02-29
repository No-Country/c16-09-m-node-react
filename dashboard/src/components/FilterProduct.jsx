
import React from "react";
import "./Card.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Card = ({ image, name, description, commerceName, location,price }) => {
    return (
      <div className="card" >
        <img src={image} alt={name} className="card-image" />
        <div className="card-content">
          <h3 className="card-name">{name}</h3>
          <p className="card-description">{description}</p>
          <h3 className="card-name">Precio: {price}</h3>
          <div className="card-details">
            <span className="card-commerce-name">{commerceName}</span>
            <span className="card-location">{location}</span>
          </div>
        </div>
      </div>
    );
  };


const FilterProducts = ({category}) => {
  const url = "http://localhost:8000/products/List";
  const [products, setProducts] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const getProducts = async () => {
   (await axios
      .get(url)
      .then((response) => {
        setProducts(response.data);
        setProductsList(response.data);
        // console.log(setProducts);
      })
      .catch((error) => {
        console.log(error?.message);
      }));
     
  };

//esto sirve para probar si realmente funciona el axios, porque no traia los productos
  //   const funcion = async()=> {
//                 let data = await axios
//                 .get(url)
//                 return
//   }
//   console.log(funcion());     


  
  const filterProducts = () => {
    console.log(category +" en filterProducts");
    console.log(products.categoryId)
    console.log(productsList);
    const searchResult = productsList.filter((product) => product?.categoryId === category);
    setProducts(searchResult);
    
  };


  useEffect(() => {
    getProducts();
    console.log("en el primer ussefect" + products.categoryId)
  }, []); 

  useEffect(() => {
    filterProducts(); 
  }, [category]); // Re-filter cuando cambia la categoria

  return (
    <div className="grid">
      <label htmlFor="">Listado</label>

      {products &&
        products.map((product) => (
          <Card
            key={product.name}
            image={product.image}
            name={product.name}
            description={product.description}
            commerce={product.commerceName}
            location={product.location}
            price={product.price}
          ></Card>
        ))}
    </div>
  );
};



export default FilterProducts;