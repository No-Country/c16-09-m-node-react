import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, Redirect } from "react-router-dom";

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
      // Limpia el temporizador cuando el componente se desmonta o cuando loggedIn cambia a false
      return () => {
        clearTimeout(timeout);
      };
    }
  }, []);

  const enviar = async (data) => {
    // hacer test de api
    try {
      const response = await fetch("http://localhost:8000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!Response.ok) {
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

  if (loggedIn) {
    return <Redirect to='/' />;
  }

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
