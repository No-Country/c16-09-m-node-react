import { useState, useEffect } from "react";

const UserRegister = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    localidad: "",
    provincia: "",
    email: "",
    telefono: "",
    contraseña: "",
  });

  const [provincias, setProvincias] = useState([]);
  const [selectedProvincia, setSelectedProvincia] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica de registro (enviar datos al servidor, etc.)
    console.log("Datos a enviar:", usuario);
  };

  const handleCancelar = () => {
    // Aquí puedes implementar la lógica de cancelación o redirección
    console.log("Registro cancelado");
  };

  useEffect(() => {
    // Función para obtener las provincias de la API
    const obtenerProvincias = async () => {
      try {
        const response = await fetch("https://apis.datos.gob.ar/georef/api/provincias");
        if (!response.ok) {
          throw new Error("Error al obtener las provincias");
        }
        const data = await response.json();
        setProvincias(data.provincias);
      } catch (error) {
        console.error("Error al obtener las provincias:", error);
      }
    };

    obtenerProvincias();
  }, []);

  const handleProvinciaChange = (e) => {
    setSelectedProvincia(e.target.value);
    setUsuario({ ...usuario, provincia: e.target.value });
  };

  return (
    <body className='page-usuarios'>
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <h2>Registro de Usuario</h2>
          {/* Campos de entrada */}
          <div className='form-group'>
            <label>
              Nombre:
              <input type='text' name='nombre' value={usuario.nombre} onChange={handleChange} />
            </label>
            <label>
              Apellido:
              <input type='text' name='apellido' value={usuario.apellido} onChange={handleChange} />
            </label>
            <label>
              Contraseña:
              <input type='text' name='contraseña' value={usuario.contraseña} onChange={handleChange} />
            </label>

            <label>
              Número de documento:
              <input type='Number' name='dni' value={usuario.dni} onChange={handleChange} />
            </label>
            <label>
              Email:
              <input type='text' name='email' value={usuario.email} onChange={handleChange} />
            </label>
            <label>
              Telefono:
              <input type='number' name='nombre' value={usuario.telefono} onChange={handleChange} />
            </label>
            <label>
              Localidad:
              <input type='text' name='localidad' value={usuario.localidad} onChange={handleChange} />
            </label>
            <label>
              Provincia:
              <select name='provincia' value={selectedProvincia} onChange={handleProvinciaChange}>
                <option value=''>Selecciona una provincia</option>
                {provincias.map((provincia) => (
                  <option key={provincia.id} value={provincia.nombre}>
                    {provincia.nombre}
                  </option>
                ))}
              </select>
            </label>
            <button type='submit'>Registrar</button>
            <button type='button' onClick={handleCancelar}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </body>
  );
};

export default UserRegister;
