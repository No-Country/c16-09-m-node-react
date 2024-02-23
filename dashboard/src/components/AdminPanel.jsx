import { Link } from "react-router-dom";

Link;

const AdminPanel = () => {
  return (
    <div>
      <h1>Panel Administrador</h1>
      <h3> En Construccion</h3>
      <button>
        <Link to='/logincomercio/comercio'>Mi Comercio</Link>
      </button>
      <Link to='/'>Volver a inicio</Link>
    </div>
  );
};

export default AdminPanel;
