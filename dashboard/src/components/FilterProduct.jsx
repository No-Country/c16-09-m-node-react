
import React from "react";
import "./Card.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Card = ({ image, name, description, commerce, location,price, province }) => {
    return (
      <div className="card" >
        <img src={image} alt={name} className="card-image" />
        <div className="card-content">
          <h3 className="card-name">{name}</h3>
          <p className="card-description">{description}</p>
          <h3 className="card-name">Precio: {price}</h3>
          <div className="card-details">
            <label className="card-commerce-name">Comercio: {commerce}</label>
            <label className="card-location">Localidad: {location}</label>
            <label className="card-location">Provincia: {province}</label>
          </div>
        </div>
      </div>
    );
  };


const FilterProducts = ({category}) => {
  const url = "http://localhost:8000/products/List";
  const [products, setProducts] = useState([]);
  const [productsList, setProductsList] = useState([]);
  

  useEffect(() => {
        
        getProducts();
  }, []); // Fetch products only once on component mount

  useEffect(() => {
       filterProducts(productsList);
  }, [category]); 
  
  
  const getProducts = async () => {
   (await axios
      .get(url)
      .then((response) => {
        setProductsList(response.data);
        console.log(response.data);
        filterProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      }));
     
  };

//esto sirve para probar si realmente funciona el axios, porque no traia los productos
  //   const funcion = async()=> {
//                 let data = await axios
//                 .get(url)
//                 return
//   }
//   console.log(funcion());     


  
  const filterProducts = (data) => {
        const searchResult = data.filter((product) => product?.categoryId == category);
        const resoultsorted = searchResult.sort((a,b)=> a.price - b.price); // ordeno por precio
        
        setProducts(resoultsorted);
        // console.log(searchResult);
    
  };

  return (
    <div className="grid">
      <label htmlFor="">Listado</label>

      { 
       (products) &&
        products.map((product) => (
          <Card
            key={product.name}
            image={product.image}
            name={product.name}
            description={product.description}
            commerce={product.Commerce.name}
            location={product.Commerce.location}
            province={product.Commerce.province}
            price={product.price}
          />
        ))}
    </div>
  );
};



export default FilterProducts;