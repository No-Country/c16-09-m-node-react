
import React from "react";
import "./Card.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


const FilterProducts = ({category}) => {
  const url = "http://localhost:8000/products/List";
  const [products, setProducts] = useState([]);
  const [productsList, setProductsList] = useState([]);
  

  useEffect(() => {
        
        getProducts();
  }, []); // Fetch products only once on component mount

  useEffect(() => {
        console.log(productsList);
       filterProducts(productsList);
  }, [category]); 
  
  
  const getProducts = async () => {
   (await axios
      .get(url)
      .then((response) => {
        setProductsList(response.data);
        // console.log(response.data);
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
            <ProductCard product={product}/>
        
        ))}
    </div>
  );
};



export default FilterProducts;