import NavBarCategory from "./NavBarCategory";
import ProductsOnSale from "./ProductsOnSale";
import ProductsMostViewed from "./ProductsMostViewed";
import NavBarButtonsMain from "./NavBarButtonsMain";
import LoginWelcome from "./LoginWelcome";
import NavBarSearch from "./NavBarSearch";

function Dashboard() {
  return (
    <>
      <div className="header"></div>
      <h1 className="title">encuentraprecio.com</h1>
      <LoginWelcome />
      <div className="div-subtitulo">
        <h2 className="subtitulo">
          Las mejores ofertas están a solo un clic de distancia!
        </h2>
      </div>
      <header>
        <NavBarButtonsMain />
      </header>
      <div className="dashboard">
        <NavBarCategory />

        <NavBarSearch />
      </div>

      <ProductsOnSale />
      <ProductsMostViewed />
      <footer>
        <div className="parrafo">
          <p>
            Únete a nosotros en encuentraprecio.com para una revolución en las
            compras localizadas. Pequeños negocios, grandes minoristas y
            compradores astutos se reúnen aquí, donde los productos son listados
            por todos, ¡y las mejores ofertas están a solo un clic de distancia!
          </p>
        </div>
      </footer>
    </>
  );
}

export default Dashboard;
