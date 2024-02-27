import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function CommerceRegister() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phoneNumber:"",
    location: "",
    province: "",
    email: "",
    password: "",
  });
  const [termsAccepted, setTermsAccepted] = useState(false); //para aceptar terminos y condiciones
  const [success, setSuccess] = useState(false);
  const [provincias, setProvincias] = useState([]);
  const [selectedProvincia, setSelectedProvincia] = useState("");
  const [localidades, setLocalidades] = useState([]);
  const [selectedLocalidad, setSelectedLocalidad] = useState("");
  const [message, setMessage] = useState("");


  useEffect(() => {
    if (success) {
      setMessage("¡Comercio registrado exitosamente!");
      resetForm();
      setTimeout(() => {
        setMessage("");
      }, 5000);
    }
  }, [success]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = () => {
    setTermsAccepted(!termsAccepted);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert("Debe aceptar los términos y condiciones.");
      return;
    }
    setSuccess(false);
    try {
      const response = await fetch("http://localhost:8000/commerce/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error("Error al registrar el comercio");
      }
      setSuccess(true);
    } catch (error) {
      console.error("Error al registrar el comercio:", error);
    }


    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: "",
      address: "",
      phoneNumber:"",
      province: "",
      location: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
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
      setFormData({ ...formData, province: provincia });
    } catch (error) {
      console.log("Error al obtener las localidades:", error);
    }
  };

  const handleLocalidadChange = (e) => {
    setSelectedLocalidad(e.target.value);
    setFormData({ ...formData, location: e.target.value });
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
    <div className='page-commerce'>
      <h1 className="title">encuentraprecio.com</h1>
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <h2>Datos del Comercio</h2>
          </div>
          <div className='form-group'>
            <label>
              Nombre del Comercio:
              <input type='text' name='name' value={formData.name} onChange={handleChange} required />
            </label>
          </div>
          <div className='form-group'>
            <label>
              Teléfono:
              <input type='text' name='phoneNumber' value={formData.phoneNumber} onChange={handleChange} />
            </label>
          </div>
          <div className='form-group'>
            <label>
              Domicilio:
              <input
                type='text'
                name='address'
                value={formData.address}
                onChange={handleChange}
                placeholder='Calle y número'
                required
              />
            </label>
          </div>
          <div className='form-group'>
            <label>
              Provincia:
              <select name='provincia' value={selectedProvincia} onChange={handleProvinciaChange} required>
                <option value=''>Selecciona una provincia</option>
                {provincias.map((provincia) => (
                  <option key={provincia.id} value={provincia.nombre}>
                    {provincia.nombre}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className='form-group'>
            <label>
              Localidad:
              <select name='localidad' value={selectedLocalidad} onChange={handleLocalidadChange} required>
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
          </div>

          <div className='form-group'>
            <label>
              Email:
              <input type='email' name='email' value={formData.email} onChange={handleChange} required />
            </label>
          </div>
          <div className='form-group'>
            <label>
              Password:
              <input
                type='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                pattern='(?=.*\d)(?=.*[A-Z]).{8,}'
                title='Password debe contener al menos 8 caracteres incluyendo un número y una mayúscula'
                required
              />
            </label>
          </div>
          <div className='form-group'>
            <label>
              Confirmar Password:
              <input
                type='password'
                name='confirmPassword'
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className='terms'>
            <label htmlFor='termsCheckbox'>
              Acepto los términos y condiciones</label>
              <input type='checkbox' id='termsCheckbox' checked={termsAccepted} onChange={handleCheckboxChange} />
            
          </div>

          <div className='form-group'>
          {message && <p className='success-message'>{message}</p>}
            <button type='submit'>Registrar</button>
            <button type='button'><Link to='/'>Salir</Link></button>
          </div>
        </form>
        <Link to='/'>Volver a inicio</Link>
      </div>
    </div>
  );
}
