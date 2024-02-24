import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UserRegister = () => {
  const [usuario, setUsuario] = useState({
    name: "",
    last_name: "",
    dni: "",
    date_of_birth: "",
    province: "",
    location: "",
    email: "",
    phone_number: "",
    password: "",
  });

  const [provincias, setProvincias] = useState([]);
  const [selectedProvincia, setSelectedProvincia] = useState("");
  const [localidades, setLocalidades] = useState([]);
  const [selectedLocalidad, setSelectedLocalidad] = useState("");
  const [userRegisterOk, setUserRegisterOk] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "aplication/json",
        },
        body: JSON.stringify(usuario),
      });

      if (!response.ok) {
        throw new Error(" Error al registra el usuario");
      }
      // Con Registro exitoso implementar redirección a la imagen de perfil, dejo redireccion a la vista inicio
      setUserRegisterOk(true);

      // analizar error de este hook
      // useEffect(() => {
      //   if (userRegisterOk) {
      //     window.location.href = "/";
      //   }
      // }, [userRegisterOk]);

      // Hacer test del proceso de registro y redireccion
    } catch (error) {
      console.log("Error al registrar usuario", error);
    }
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
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <h2>Registro de Usuario</h2>
          {/* Campos de entrada */}
          <div className='form-group'>
            <label>
              Nombre:
              <input type='text' name='name' value={usuario.name} onChange={handleChange} />
            </label>
            <label>
              Apellido:
              <input type='text' name='last_name' value={usuario.last_name} onChange={handleChange} />
            </label>
            <label>
              Número de documento:
              <input type='Number' name='dni' value={usuario.dni} onChange={handleChange} />
            </label>
            <label>
              Fecha Nacimiento:
              <input type='date' name='date_of_birth' value={usuario.date_of_birth} onChange={handleChange} />
            </label>
            <label>
              Provincia:
              <select name='province' value={selectedProvincia} onChange={handleProvinciaChange}>
                <option value=''>Selecciona una provincia</option>
                {provincias.map((provincia) => (
                  <option key={provincia.id} value={provincia.nombre}>
                    {provincia.nombre}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Localidad:
              <select name='location' value={selectedLocalidad} onChange={handleLocalidadChange}>
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
              Contraseña:
              <input type='text' name='password' value={usuario.contraseña} onChange={handleChange} />
            </label>
            <label>
              Email:
              <input type='text' name='email' value={usuario.email} onChange={handleChange} />
            </label>
            <label>
              Telefono:
              <input type='text' name='phone_number' value={usuario.phone_number} onChange={handleChange} />
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
