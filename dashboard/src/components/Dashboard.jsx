import NavBarCategory from "./NavBarCategory";
import ProductsOnSale from "./ProductsOnSale";
import ProductsRecent from "./ProductsRecent";
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
      <ProductsRecent />
      <footer>
        <span>Proyecto No-Country</span>
        <br />
        <span>Marzo de 2024</span>
      </footer>
    </>
  );
}

export default Dashboard;
