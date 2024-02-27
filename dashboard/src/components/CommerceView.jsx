import { useState } from "react";
import "./Commerceview.css";
import { Link } from "react-router-dom";


function FormAddProduct() {
  
  const [formDataProduct, setFormDataProduct] = useState({
    name: "",
    presentation: "",
    marca: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDataProduct({ ...formDataProduct, [name]: value });
  };
  function handleSubmit(e) {
    e.preventDefault();
    resetForm();
    console.log("grabo datos del producto");
  }
  const resetForm = () => {
    setFormDataProduct({
      name: "",
      presentation: "",
      marca: "",
      price: "",
    });
  };
  return (
    <form className="form-container-producto" onSubmit={handleSubmit}>
      <h3 className="h3">Alta de Producto</h3>
      <div className="form-group">
        <label htmlFor="rubro">Rubro:</label>
        <select id="rubro" >
          <option value="lacteos">Lácteos</option>
          <option value="bebidas">Bebidas</option>
          <option value="limpieza">Limpieza</option>
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
            name="presentation"
            value={formDataProduct.presentation}
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
            name="marca"
            value={formDataProduct.marca}
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


// function FormEditProduct() {
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     // setFormDataProduct({ ...formDataProduct, [name]: value });
//   };
//   function handleSubmit(e) {
//     e.preventDefault();
//     resetForm();
//     console.log("grabo datos del producto");
//   }

//   return (
//     <form className="form-container-producto" onSubmit={handleSubmit}>
//       <h3 className="h3">Modificacion de Producto</h3>
//       <div className="form-group">
//         <label htmlFor="rubro">Seleccione producto:</label>
//         <select id="rubro">
//           <option value="cargar productos base">cargar productos base</option>
//           <option value="cargar productos base">cargar productos base</option>
//           <option value="cargar productos base">cargar productos base</option>
//         </select>
//       </div>
//       <div className="form-group">
//         <label>
//           Nombre del Producto:
//           <input
//             className="input-producto"
//             type="text"
//             name="name"
//             // value={formDataProduct.name}
//             onChange={handleChange}
//             required
//           />
//         </label>
//       </div>
//       <div className="form-group">
//         <label>
//           Presentacion:
//           <input
//             className="input-producto"
//             type="text"
//             name="presentation"
//             // value={formDataProduct.presentation}
//             onChange={handleChange}
//             required
//           />
//         </label>
//       </div>
//       <div className="form-group">
//         <label>
//           Marca:
//           <input
//             className="input-producto"
//             type="text"
//             name="marca"
//             // value={formDataProduct.marca}
//             onChange={handleChange}
//             required
//           />
//         </label>
//       </div>
//       <div className="form-group">
//         <label>
//           Precio:
//           <input
//             className="input-producto"
//             type="number"
//             name="price"
//             // value={formDataProduct.price}
//             onChange={handleChange}
//             required
//           />
//         </label>
//       </div>
//       <div className="form-group">
//         <button type="submit">Guardar cambios</button>
//       </div>
//     </form>
//   );
// }

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
              <td>{producto.marca}</td>
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
  const cID = commerceName.id;

  function Vistas({ mostrar }) {
    switch (mostrar) {
      case "newproduct":
        return <FormAddProduct />;
    
      case "delete":
        return <FormDeleteProduct />;
      
      default:
        console.log(localStorage.commerceData)
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
        <div className="right-section">{Vistas({ mostrar })}</div>
      </div>
    </div>
  );
}

export default CommerceView;
