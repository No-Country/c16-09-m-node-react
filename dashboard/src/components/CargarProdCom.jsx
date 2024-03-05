import React from "react";
import "./Card.css";
import axios from "axios";
import { useEffect, useState } from "react";
// import EditarProductos from "./EditarProductos";

const CargarProdCom = ({ commerceId }) => {
  const url = "http://localhost:8000/products/List";
  const [products, setProducts] = useState([]);
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    getProducts();
  }, []); // Fetch products only once on component mount

  useEffect(() => {
    filterProducts(productsList);
  }, [commerceId]);

  const getProducts = async () => {
    await axios
      .get(url)
      .then((response) => {
        setProductsList(response.data);
        console.log(response.data);
        filterProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const filterProducts = (data) => {
    const searchResult = data.filter(
      (product) => product?.commerceId == commerceId
    );
    const resoultsorted = searchResult.sort((a, b) => a.price - b.price); // ordeno por precio

    setProducts(resoultsorted);
    // console.log(searchResult);
  };

  const handleEditarProducto = ({product}) => {
    console.log(product.id);
    // return(

    //   // <EditarProductos />
    // )
  };
  const handleEliminarProducto = ({product}) => {
    
    console.log(product.id);
   
  }
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Rubro</th>
            <th>Nombre</th>
            <th>Presentación</th>
            <th>Marca</th>
            <th>Precio</th>
            <th>Borrar</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product) => (
              <tr key={product.id} data-key={product.id}>
                <td>{product.Category.name}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.company}</td>
                <td>{product.price}</td>
                <td onClick={handleEliminarProducto({product})}>
                  <button
                    className="btn-borrar"
                    onClick={() => handleEliminarProducto({product})}
                  >
                    <label>❌</label>
                  </button>
                </td>
                <td>
                  <button
                    className="btn-borrar"
                    onClick={() => handleEditarProducto({product})}
                  >
                    <label>✏️</label>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default CargarProdCom;
