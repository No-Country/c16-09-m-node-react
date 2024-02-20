import { useState } from "react";


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
    <>
     
        <div className="form-container">
          <h2>Datos del Comercio</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nombre del Comercio:</label>
              <input
                type="text"
                name="shopName"
                value={formData.shopName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Domicilio:</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Calle y número"
                required
              />
            </div>
            <div className="form-group">
              <label>Provincia:</label>
              <input
                type="text"
                name="province"
                value={formData.province}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Localidad:</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                pattern="(?=.*\d)(?=.*[A-Z]).{8,}"
                title="Password debe contener al menos 8 caracteres incluyendo un número y una mayúscula"
                required
              />
            </div>
            <div className="form-group">
              <label>Confirmar Password:</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="checkbox"
                id="termsCheckbox"
                checked={termsAccepted}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="termsCheckbox">
                Acepto los términos y condiciones
              </label>
            </div>

            <div className="form-group">
              <button type="submit">Registrar</button>
              <button type="button">
                Salir
              </button>
            </div>
          </form>
        </div>
    </>
  );
}
