import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn");
    if (isLoggedIn === "true") {
      setLoggedIn(true);

      const timeout = setTimeout(() => {
        localStorage.removeItem("loggedIn");
        setLoggedIn(false);
      }, 600000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, []);

  useEffect(() => {
    if (loggedIn) {
      window.location.href = "/";
    }
  }, [loggedIn]);

  const enviar = async (data) => {
    try {
      const response = await fetch("http://localhost:8000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error al iniciar la sesion");
      }

      localStorage.setItem("loggedIn", "true");
      setLoggedIn(true);

      const timeout = setTimeout(() => {
        localStorage.removeItem("loggedIn");
        setLoggedIn(false);
      }, 600000);

      return () => clearTimeout(timeout);
    } catch (error) {
      console.log("Error al iniciar la sesion: ", error.message);
    }
  };

  return (
    <div className=''>
      <h1 className=''>Ingresa a tu cuenta</h1>
      <form className='' onSubmit={handleSubmit(enviar)}>
        <input type='email' placeholder='Ingresa tu Email' {...register("email")} />
        <input type='password' placeholder='Ingresa tu password' {...register("password")} />
        <button type='submit'>Enviar</button>
      </form>
      <Link to='/'>Volver a inicio</Link>
    </div>
  );
}
