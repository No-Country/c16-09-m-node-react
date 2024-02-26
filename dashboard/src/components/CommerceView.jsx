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

function handleEditarProducto(){
  console.log("editar producto")
}

function handleEliminarProducto(){
    console.log("borrar producto")
}


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

  function Vistas({ mostrar }) {
    switch (mostrar) {
      case "newproduct":
        return <FormAddProduct />;
    
    
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
    <body className="commerce">
      <header id="header-commerce">
        <h1 className="title-commerce">encuentraprecio.com</h1>
        <div>
          <h2 id="nombre-comercio">NOMBRE COMERCIO</h2>
        </div>
      </header>
      <main className="commerce-view">
        <div className="side-bar">
          <button type="button" onClick={handleViewNewProduct}>
            Alta Producto
          </button>
         
         
          <button type="button" onClick={handleViewDeleteProduct}>
            Modificacion o Baja Producto
          </button>
          <button type='button'><Link to='/'>Salir</Link></button>
        </div>
        <div className="right-section">{Vistas({ mostrar })}</div>
      </main>
    </body>
  );
}

export default CommerceView;
