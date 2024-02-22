import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function CommerceRegister() {
  const [formData, setFormData] = useState({
    shopName: "",
    address: "",
    province: "",
    city: "",
    email: "",
    password: "",
  });
  const [termsAccepted, setTermsAccepted] = useState(false); //para aceptar terminos y condiciones

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = () => {
    setTermsAccepted(!termsAccepted);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert("Debe aceptar los términos y condiciones.");
      return;
    }

    resetForm();
  };

  const resetForm = () => {
    setFormData({
      shopName: "",
      address: "",
      province: "",
      city: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <body className='page-commerce'>
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <h2>Datos del Comercio</h2>
          </div>
          <div className='form-group'>
            <label>
              Nombre del Comercio:
              <input type='text' name='shopName' value={formData.shopName} onChange={handleChange} required />
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
              <input type='text' name='province' value={formData.province} onChange={handleChange} required />
            </label>
          </div>
          <div className='form-group'>
            <label>
              Localidad:
              <input type='text' name='city' value={formData.city} onChange={handleChange} required />
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
          <div className='form-group'>
            <label htmlFor='termsCheckbox'>
              Acepto los términos y condiciones
              <input type='checkbox' id='termsCheckbox' checked={termsAccepted} onChange={handleCheckboxChange} />
            </label>
          </div>

          <div className='form-group'>
            <button type='submit'>Registrar</button>
            <button type='button'>Salir</button>
          </div>
        </form>
        <Link to='/'>Volver a inicio</Link>
      </div>
    </body>
  );
}
