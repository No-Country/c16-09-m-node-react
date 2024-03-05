import { useState, useEffect } from "react";
import "./Commerceview.css";
import { Link } from "react-router-dom";
import axios from "axios";

function FormAddProduct({commerceID}) {
  // const [success, setSuccess] = useState(false);
  // const url = "http://localhost:8000/category";
  // const [formDataProduct, setFormDataProduct] = useState({
  //   commerceID,
  //   name: "",
  //   description: "",
  //   company: "",
  //   price: "",
  //   image: "",
  //   categoryId:"",
  // });

  // useEffect(() => {
  //   populateSelect();
  // }, []);


  // const [selectedCategory, setSelectedCategory]= useState("")
  // const fetchData = async () => {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   return data;
  // };
  // const populateSelect = async () => {
  //   const data = await fetchData();
  //   const options = data.map((category) => {
  //     return `<option value="${category.id}">${category.name}</option>`;
  //   });
  //   const selectElement = document.getElementById("select");
  //   selectElement.innerHTML = options.join("");
  // };
  
  // // populateSelect();
  // const handleRubroChange = async (e) => {
  //   // const category = e.target.value;
  //   const { name, value } = e.target;
  //   setFormDataProduct({ ...formDataProduct, [name]: value });

    // setSelectedCategory(category);

    // try {
    //   const response = await fetch(
    //     `http://localhost:8000/category`
    //     // `https://apis.datos.gob.ar/georef/api/localidades?provincia=${provincia}&orden=id&aplanar=true&campos=estandar&max=530`
    //   );
    //   if (!response.ok) {
    //     throw new Error("Error al obtener las categorias");
    //   }
    //   const data = await response.json();
    //   setSelectedCategory(data.category);
    //   setFormDataProduct({ ...formDataProduct, categoryId: category });
    // } catch (error) {
    //   console.log("Error al obtener las categorias:", error);
    // }
  // };

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
  
    // useEffect(() => {

    //   const getProducts = async () => {
    //     await axios
    //       .get(url)
    //       .then((response) => {
    //         setCategories(response.data);
    //         populateSelect();
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   };
    //   console.log(setCategories);
    //   getProducts();
      // async function fetchData() {
      //   try {
      //     const response = await fetch(url);
      //     if (!response.ok) {
      //       throw new Error("Failed to fetch categories");
      //     }
      //     const data = await response.json();
      //     setCategories(data);
      //     populateSelect();
      //   } catch (error) {
      //     console.error("Error fetching categories:", error);
      //     // Handle the error appropriately (e.g., display an error message to the user)
      //   }
      // }
      


      // const fetchData = async () => {
      //   const response = await fetch(url);
      //   const data = await response.json();
      //   setCategories(data); // Store categories in state
      //   populateSelect(); // Call populateSelect after categories are fetched
      // };
      // fetchData();
    // }, []);
  
    // const populateSelect = () => {
    //   const options = categories.map((category) => (
    //     <option key={category.id} value={category.id}>
    //       {category.nombre}
    //     </option>
    //   ));
    //   // Use the correct ID for the select element
    //   const selectElement = document.getElementById("category");
    //   selectElement.innerHTML = options.join("");
    // };

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
        {/* <select name= "category" id="category" value={selectedCategory} onChange={handleRubroChange} >
          <option value=''>Rubro</option>
          {category.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.nombre}
                  </option>
                ))}
        </select> */}
        <select
          name="category"
          id="category"
          // value={selectedCategory}
          onChange={handleRubroChange}
        >
          <option value="" >Rubro</option>
          <option value="1" >Almacen</option>
          <option value="2">Bebidas</option>
          <option value="3">Frescos</option>
          <option value="4">Limpieza</option>
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
  // setLoggedIn(false); // actualizo loggedIn state
  navigate("/"); 
};


function FormDeleteProduct() {
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
            <tr>
                <td>Lacteo</td>
                <td>Leche larga vida</td>
                <td>Litro</td>
                <td>La Lacteo</td>
                <td>850</td>
                <td><button className="btn-borrar" onClick={() => handleEliminarProducto(producto.id)}>
                    <label>❌</label>
                </button></td>
                <td><button className="btn-borrar" onClick={() => handleEditarProducto(producto.id)}>
                    <label>✏️</label>
                </button></td>
          {/* {productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.rubro}</td>
              <td>{producto.nombre}</td>
              <td>{producto.presentacion}</td>
              <td>{producto.company}</td>
              <td>
                <button onClick={() => handleEliminarProducto(producto.id)}>
                  <i className="fa fa-trash"></i>
                </button>
                
              </td> */}
            </tr>
          {/* ))}{" "} */}
          
        </tbody>
      </table>
    </>
  );
}

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
        return <FormDeleteProduct />;
      
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
