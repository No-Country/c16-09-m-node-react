import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <button> Registro Comercio</button>
      <button> Registro Usuario</button>
      <button>
        <Link to='/login'>Ingresa a tu cuenta</Link>
      </button>
      <h1>encuentraprecio.com</h1>
      <form>
        <input type='search' placeholder='Search' />
        <button type='submit'>Search</button>
      </form>
    </>
  );
}

export default Dashboard;
