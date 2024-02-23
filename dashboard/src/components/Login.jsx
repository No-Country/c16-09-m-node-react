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
      }, 3600000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, []);

  const enviar = (data) => {
    console.log("enviado", data);
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
