import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const [loggedIn, setLoggedIn] = useState(false);

  // This process has no cookies configuration

  useEffect(() => {
    if (loggedIn) {
      console.log("loggedIn", loggedIn);

      window.location.href = "/";
    }
  }, [loggedIn]);

  const send = async (data) => {
    try {
      const response = await fetch("http://localhost:8000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log("response", response);
      console.log("Data", data);

      if (!response.ok) {
        throw new Error("Error al iniciar la sesion");
      }

      localStorage.setItem("loggedIn", "true");
      setLoggedIn(true);
    } catch (error) {
      console.log("Error al iniciar la sesion: ", error.message);
    }
  };

  return (
    <div className='login'>
      <div className='div-login'>
        <h1 className='title'>encuentraprecio.com</h1>
        <h1 className='sub-title'>Ingresa a tu cuenta</h1>
        <form className='form-container-login' onSubmit={handleSubmit(send)}>
          <input className='input-login' type='email' placeholder='Ingresa tu Email' {...register("email")} />
          <input className='input-login' type='password' placeholder='Ingresa tu password' {...register("password")} />
          <button type='submit'>Enviar</button>
          <Link to='/'>Volver a inicio</Link>
        </form>
      </div>
    </div>
  );
}
