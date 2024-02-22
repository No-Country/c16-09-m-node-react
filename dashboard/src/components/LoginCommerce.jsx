import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const navigate= useNavigate();
  const enviar = (data) => {
    console.log("enviado", data);
    navigate("/logincomercio/comercio");
    // window.location.href = "/logincomercio/comercio";
  };

  return (
    <div className=''>
      <h1 className=''>Mi Comercio</h1>
      <form className='' onSubmit={handleSubmit(enviar)}>
        <input type='email' placeholder='Ingresa tu Email' {...register("email")} />
        <input type='password' placeholder='Ingresa tu password' {...register("password")} />
        <button type='submit'>Enviar</button>
      </form>
      <Link to='/'>Volver a inicio</Link>
    </div>
  );
}
