import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
  const [localidades, setLocalidades] = useState([]);
  const [selectedLocalidad, setSelectedLocalidad] = useState("");

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

  const handleProvinciaChange = async (e) => {
    const provincia = e.target.value;
    setSelectedProvincia(provincia);

    try {
      const response = await fetch(
        `https://apis.datos.gob.ar/georef/api/localidades?provincia=${provincia}&orden=id&aplanar=true&campos=estandar&max=530`
      );
      if (!response.ok) {
        throw new Error("Error al obtener las localidades");
      }
      const data = await response.json();
      setLocalidades(data.localidades);
      setUsuario({ ...usuario, provincia: provincia });
    } catch (error) {
      console.log("Error al obtener las localidades:", error);
    }
  };

  const handleLocalidadChange = (e) => {
    setSelectedLocalidad(e.target.value);
    setUsuario({ ...usuario, localidad: e.target.value });
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

  return (
    <div className='page-usuarios'>
      <h1 className="title">encuentraprecio.com</h1>
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
              <select name='localidad' value={selectedLocalidad} onChange={handleLocalidadChange}>
                <option value=''>Selecciona una localidad</option>
                {localidades.map((localidad) => {
                  return (
                    <option key={localidad.id} value={localidad.nombre}>
                      {localidad.nombre}
                    </option>
                  );
                })}
              </select>
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
        <Link to='/'>Volver a inicio</Link>
      </div>
    </div>
  );
};

export default UserRegister;
