import { useForm } from "react-hook-form";
import { Link, useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import "./login.css";


export default function Login() {
  const { register, handleSubmit } = useForm();
  const navigate= useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() =>{
    if (loggedIn){
      console.log("loggedIn", loggedIn);
      navigate("/logincomercio/comercio");
    }
  },[loggedIn]);
  const send = async (data) => {
    console.log(data);
    try {
      const response = await fetch("http://localhost:8000/commerce/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log("response", response);

      if (!response.ok) {
        throw new Error("Error al iniciar la sesion");
      }

      localStorage.setItem("loggedIn", "true");
      setLoggedIn(true);
    } catch (error) {
      console.log("Error al iniciar la sesion: ", error.message);
    }
  };
  const logout = () => {
    localStorage.removeItem("loggedIn"); // limpio local storage
    setLoggedIn(false); // actualizo loggedIn state
    navigate("/"); 
  };

  return (
    <div className="login">
      <div className="div-login">
        <h1 className="title">encuentraprecio.com</h1>
        <h1 className="sub-title">Mi Comercio</h1>
        <form
          className="form-container-login"
          onSubmit={handleSubmit(send)}
        >
          <input
            className="input-login"
            type="email"
            placeholder="Ingresa tu Email"
            {...register("email")}
          />
          <input
            className="input-login"
            type="password"
            placeholder="Ingresa tu password"
            {...register("password")}
          />
          <button type="submit">Enviar</button>
          <Link onClick = {logout} to="/">
            Volver a inicio
          </Link>
        </form>
      </div>
    </div>
  );
}
