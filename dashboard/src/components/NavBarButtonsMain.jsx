import { Link } from "react-router-dom";
import "./NavBarButtonsMain.css";

export default function NavBarButtonsMain() {
  return (
    <div className='button-container'>
      <button>
        <Link to='/registrocomercio'>Registro Comercio</Link>
      </button>
      <button>
        <Link to='/registrousuario'>Registro Usuario</Link>
      </button>
      <button>
        <Link to='/login'>Ingresa a tu cuenta</Link>
      </button>
      <button>
        <Link to='/logincomercio'>Ingresa a tu Comercio</Link>
      </button>
      <button>
        <Link to='/panelcontrol'>Panel de Control Admin</Link>
      </button>
    </div>
  );
}
