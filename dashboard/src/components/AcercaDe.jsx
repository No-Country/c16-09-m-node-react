import { Link } from "react-router-dom";


export default function AcercaDe(){
    return (
        <div className="div-footer">
          <h1 style={{textAlign:"center"}}>Acerca de encuentraprecio.com</h1>
          <h2 className="tx-footer">Proyecto NO-COUNTRY</h2>
          <h3 className="tx-footer">Marzo de 2024</h3>
          <div className="imagen-footer">
            <div className="image">

            </div>
            <div className="miembros">

          <h2 className="tx-footer"> Miembros del equipo</h2>
          <p>
            <strong>Gerardo Zorzoni</strong>
            <br />
            https://github.com/GeraZorzoni
            <br />
            https://www.linkedin.com/in/gerardozorzoni/
            <br />
            <br />
            <strong>Daniel Rojas</strong>
            <br />
            https://github.com/danielrojas76
            <br />
            https://www.linkedin.com/in/daniel-rojas-51356919b/
            <br />
            <br />
            <strong>Santiago Soto</strong>
            <br />
            https://github.com/SH-ur
            <br />
            https://www.linkedin.com/in/santiago-soto-43ab99260/
            <br />
            <br />
            <strong>Beatriz Londero</strong>
            <br />
            https://github.com/beatrizlondero
            <br />
            https://www.linkedin.com/in/beatriz-londero
          </p>
            </div>


        </div>
        <div style={{textAlign:"center"}}>

          <button>
           
            <Link to='/'>Volver a inicio</Link>
          </button>
        </div>
        </div>
      );

};