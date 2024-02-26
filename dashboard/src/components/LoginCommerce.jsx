import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";


export default function Login() {
  const { register, handleSubmit } = useForm();
  const navigate= useNavigate();
  const enviar = (data) => {
    console.log("enviado", data);
    navigate("/logincomercio/comercio");
    // window.location.href = "/logincomercio/comercio";
  };

  return (
    <div className='login'>
      <div className="div-login">

        <h1 className="title">encuentraprecio.com</h1>
        <h1 className='sub-title'>Mi Comercio</h1>
        <form className='form-container-producto' onSubmit={handleSubmit(enviar)}>
          <input className= "input-login" type='email' placeholder='Ingresa tu Email' {...register("email")} />
          <input className= "input-login" type='password' placeholder='Ingresa tu password' {...register("password")} />
          <button type='submit'>Enviar</button>
        <Link className ="link" to='/'>Volver a inicio</Link>
        </form>
      </div>
    </div>
  );
}
