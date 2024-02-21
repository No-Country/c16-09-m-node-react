import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <header>
          <button>
            <Link to='/registrocomercio'>Registro Comercio</Link>
          </button>
          <button>
            <Link to='/registrousuario'>Registro Usuario</Link>
          </button>
          <button>
            <Link to='/login'>Ingresa a tu cuenta</Link>
          </button>
        </header>
      <body className="dashboard">
        <h1 className="title">encuentraprecio.com</h1>
        <div className="parrafo">

          <p>Únete a nosotros en encuentraprecio.com 
          para una revolución en las compras localizadas.
          Pequeños negocios, grandes minoristas y compradores astutos se reúnen aquí,
          donde los productos son listados por todos,
          ¡y las mejores ofertas están a solo un clic de distancia!</p>
        </div>
        <form>
          <input type='search' placeholder='Search' />
          <button type='submit'>Search</button>
        </form>
      </body>
    </>
  );
}

export default Dashboard;
