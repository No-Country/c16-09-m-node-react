import { useState, useEffect } from "react";
import "./Commerceview.css";
import { Link } from "react-router-dom";
import axios from "axios";
import CargarProdCom from "./CargarProdCom";

function FormAddProduct({commerceID}) {
 
    const [oferta, setOferta] = useState(false);
    const [success, setSuccess] = useState(false);
    const url = "http://localhost:8000/category/categories";
    const url2="http://localhost:8000/products/create";
    const [formDataProduct, setFormDataProduct] = useState({
      commerceId:commerceID,
      name: "",
      description: "",
      company: "",
      price: "",
      image: "",
      categoryId: "",
      offers:false,
    });
    const [selectedCategory, setSelectedCategory] = useState("");
    const [categories, setCategories] = useState([]); 
  
    
    useEffect(() => {

      const getProducts = async () => {
        await axios
          .get(url)
          .then((response) => {
            setCategories(response.data);
            // populateSelect();
          })
          .catch((error) => {
            console.log(error);
          });
      };
      getProducts();
    }, []);
  
    

    const handleRubroChange = async (e) => {
      console.log(e.target.value);
      // const { name, value } = e.target.value;
      setFormDataProduct({ ...formDataProduct, categoryId: parseInt(e.target.value) });
    };

    const handleChanegeOferta=() =>{
      // if (!oferta){setOferta(true)}else{setOferta(false)}
      (!oferta)? setOferta(true): setOferta(false);
      setFormDataProduct({ ...formDataProduct, offers: oferta });
    }
    const handleChange = (e) => {
      try {
        if (e.target.name === "image") {
          const file = e.target.files[0];
          setFormDataProduct({ ...formDataProduct, image: file });
        } else {
          const { name, value } = e.target;
          setFormDataProduct({ ...formDataProduct, [name]: value });
        }
      } catch (error) {
        console.error("Error handling file input:", error);
        // Handle the error gracefully, e.g., display a user-friendly message
      }
    };
   
  // const handleChange = (e) => {
  //   if (e.target.name === "image") {
  //     console.log(e.target.files[0])
  //     setFormDataProduct({ ...formDataProduct, image: e.target.files[0]});
  //   } else {
      
  //     const { name, value } = e.target;
  //     setFormDataProduct({ ...formDataProduct, [name]: value });
  //   }
  //   // const { name, value } = e.target;
  //   // setFormDataProduct({ ...formDataProduct, [name]: value });
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    let prueba = new FormData();
        // formDataProduct.map((product)=> console.log(product))
      // console.log(formDataProduct.name);
      // console.log(formDataProduct.commerceID);
      // console.log(formDataProduct.categoryId);
        prueba.append("commerceId", formDataProduct.commerceID);
        prueba.append("categoryId", formDataProduct.categoryId);
        prueba.append("name", formDataProduct.name);
        prueba.append("description", formDataProduct.description);
        prueba.append("company", formDataProduct.company);
        prueba.append("price", formDataProduct.price);
        prueba.append("image", formDataProduct.image);
        prueba.append("offers", formDataProduct.offers);
        console.log(prueba.getAll("name"));




    setSuccess(false);
    if(formDataProduct.categoryId === "Rubro" || formDataProduct.categoryId === "" ){
      alert("Debe seleccionar un Rubro");
      return;
    }
    
    try {
        let resultado = await axios.post("http://localhost:8000/products/create", formDataProduct)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
        // console.log(resultado)
        // console.log("resultado")
      // const response = await fetch("http://localhost:8000/products/create", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formDataProduct),

      // });
      // console.log(JSON.stringify(response));
      // console.log(body);
      if (!response.ok) {
        throw new Error("Error bad response");
      }
      setSuccess(true);
    } catch (error) {
      console.error("Error al registrar el producto", error.message);
    }
    setFormDataProduct({ ...formDataProduct, commerceId: {commerceID}});
    
    // console.log(formDataProduct)
    setOferta(false);
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
      offers: false,
    });
    setOferta(false);
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
          <option value= "0"> Rubro </option>
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
            defaultValue={formDataProduct.image}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div className="form">
        <label>
          Producto en oferta
          <input
            className="input-ofer"
            type="checkbox"
            name="oferta"
            value={oferta}
            checked={oferta}
            onChange={handleChanegeOferta} 
          />
        </label>
      </div>
      <div className="form-group">
        <button type="submit">Agregar Producto</button>
        <button type="button" onClick={resetForm}>
          Borrar
        </button>
      </div>
      {/* {(success) <message>} */}
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
        return <CargarProdCom commerceId={commerceID}/>;

       
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
