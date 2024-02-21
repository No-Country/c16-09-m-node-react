import React, { useState } from 'react';

const UserRegister = () => {
  const [usuario, setUsuario] = useState({
    nombre: '',
    apellido: '',
    dni: '',
    localidad: '',
    provincia: '',
    email: '',
    telefono: '',
    contraseña: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica de registro (enviar datos al servidor, etc.)
    console.log('Datos a enviar:', usuario);
  };

  const handleCancelar = () => {
    // Aquí puedes implementar la lógica de cancelación o redirección
    console.log('Registro cancelado');
  };

  return (
    <body className="page-usuarios">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
        <h2>Registro de Usuario</h2>
          {/* Campos de entrada */}
          <div className='form-group'>
            <label>Nombre:
              <input type="text" name="nombre" value={usuario.nombre} onChange={handleChange} />
            </label>
            <label>Apellido:
              <input type="text" name="apellido" value={usuario.apellido} onChange={handleChange} />
            </label>
            <label>Contraseña:
              <input type="text" name="contraseña" value={usuario.contraseña} onChange={handleChange} />
            </label>
            
            <label>Número de documento:
              <input type="Number" name="dni" value={usuario.dni} onChange={handleChange} />
            </label>
            <label>Email:
              <input type="text" name="email" value={usuario.email} onChange={handleChange} />
            </label>
            <label>Telefono:
              <input type="number" name="nombre" value={usuario.telefono} onChange={handleChange} />
            </label>
            <label>Localidad:
              <input type="text" name="localidad" value={usuario.localidad} onChange={handleChange} />
            </label>
            <label>Provincia:
              <input type="text" name="provincia" value={usuario.provincia} onChange={handleChange} />
            </label>
            <button type="submit">Registrar</button>
            <button type="button" onClick={handleCancelar}>Cancelar</button>
          </div>
          {/* Botones de registro y cancelar */}
          {/* <br /> */}
        </form>
      </div>
    </body>
  );
};

export default UserRegister;