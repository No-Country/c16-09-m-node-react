import { useState, useEffect } from "react";
import "./Commerceview.css";
import { Link } from "react-router-dom";
import axios from "axios";
import CargarProdCom from "./CargarProdCom";

function FormAddProduct({commerceID}) {


    const [success, setSuccess] = useState(false);
    const url = "http://localhost:8000/category/categories";
    const [formDataProduct, setFormDataProduct] = useState({
      commerceID,
      name: "",
      description: "",
      company: "",
      price: "",
      image: "",
      categoryId: "",
    });
    const [selectedCategory, setSelectedCategory] = useState("");
    const [categories, setCategories] = useState([]); // Store fetched categories
  
    /////////////////////////////////////////

    useEffect(() => {
      getCategory();
    }, []); // Fetch products only once on component mount
  
   
  
    const getCategory = async () => {
      await axios
        .get(url)
        .then((response) => {
          setCategories(response.data);
          console.log(response.data);
          setSelectedCategory(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  



    //////////////////////////////////////

    const handleRubroChange = async (e) => {
      console.log(e.target.value);
      // const { name, value } = e.target.value;
      setFormDataProduct({ ...formDataProduct, categoryId: e.target.value });
    };




  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDataProduct({ ...formDataProduct, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    try {
      const response = await fetch("http://localhost:8000/products/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataProduct),
      });

      if (!response.ok) {
        throw new Error("Error al registrar el comercio");
      }
      setSuccess(true);
    } catch (error) {
      console.error("Error al registrar el comercio:", error);
    }
    setFormDataProduct({ ...formDataProduct, commerceId: {commerceID}});
    
    console.log(formDataProduct)

    resetForm();
  };
  const resetForm = () => {
    setFormDataProduct({
      commerceID,
      name: "",
      description: "",
      company: "",
      price: "",
      image: "",
      categoryId: "Rubro",
    });
  };
  return (
    <form className="form-container-producto" onSubmit={handleSubmit}>
      <h3 className="h3">Alta de Producto</h3>
      <div className="form-group">
        <label htmlFor="rubro">Seleccione Rubro:</label>
       
        <select
          name="category"
          id="category"
          onChange={handleRubroChange}
        >
          <option value=''>Rubro</option>
          {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
        </select>
      </div>
      <div className="form-group">
        <label>
          Nombre del Producto:
          <input
            className="input-producto"
            type="text"
            name="name"
            value={formDataProduct.name}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Presentacion:
          <input
            className="input-producto"
            type="text"
            name="description"
            value={formDataProduct.description}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Marca:
          <input
            className="input-producto"
            type="text"
            name="company"
            value={formDataProduct.company}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Precio:
          <input
            className="input-producto"
            type="number"
            name="price"
            value={formDataProduct.price}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Imagen:
          <input
            className="input-producto"
            type="file"
            name="image"
            value={formDataProduct.image}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div className="form-group">
        <button type="submit">Agregar Producto</button>
        <button type="button" onClick={resetForm}>
          Borrar
        </button>
      </div>
    </form>
  );
}

const logout = () => {
  console.log("logout")
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("commerceData"); // limpio local storage
  navigate("/"); 
};


//funcion principal
function CommerceView() {
  const [mostrar, setMostrar] = useState("");
  const commerceName = JSON.parse(localStorage.getItem("commerceData"));
  const cName = commerceName.name;
  const commerceID = commerceName.id;

  function Vistas({ mostrar , commerceID}) {
    switch (mostrar) {
      case "newproduct":
        return <FormAddProduct commerceID = {commerceID}/>;
    
      case "delete":
        return <CargarProdCom commerceId={commerceID} />;
      
      default:
        return <p>Aguardando seleccione opcion</p>;
    }
  }

  function handleViewNewProduct() {
    setMostrar("newproduct");
  }



  function handleViewDeleteProduct() {
    setMostrar("delete");
  }

  return (
    <div className="commerce">
      <div id="header-commerce">
        <h1 className="title-commerce">encuentraprecio.com</h1>
        <div>
          <h2 id="nombre-comercio">{cName.toUpperCase()}</h2>
        </div>
      </div>
      <div className="commerce-view">
        <div className="side-bar">
          <button type="button" onClick={handleViewNewProduct}>
            Alta Producto
          </button>
         
          <button type="button" onClick={handleViewDeleteProduct}>
            Modificacion o Baja Producto
          </button>
          <button type='button'><Link onClick = {logout} to='/'>Salir</Link></button>
        </div>
        <div className="right-section">{Vistas({ mostrar, commerceID })}</div>
      </div>
    </div>
  );
}

export default CommerceView;
