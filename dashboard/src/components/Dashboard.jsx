import NavBarCategory from "./NavBarCategory";
import ProductsOnSale from "./ProductsOnSale";
import ProductsMostViewed from "./ProductsMostViewed";
import NavBarButtonsMain from "./NavBarButtonsMain";
import LoginWelcome from "./LoginWelcome";
import NavBarSearch from "./NavBarSearch";

function Dashboard() {
  return (
    <>
      <h1 className='title'>encuentraprecio.com</h1>
      <LoginWelcome />
      <h2>Las mejores ofertas están a solo un clic de distancia!</h2>
      <header>
        <NavBarButtonsMain />
      </header>
      <div className='dashboard'>
        <div className='parrafo'>
          <p>
            Únete a nosotros en encuentraprecio.com para una revolución en las compras localizadas. Pequeños negocios,
            grandes minoristas y compradores astutos se reúnen aquí, donde los productos son listados por todos, ¡y las
            mejores ofertas están a solo un clic de distancia!
          </p>
        </div>
        <NavBarCategory />

        <NavBarSearch />
      </div>

      <ProductsOnSale />
      <ProductsMostViewed />
    </>
  );
}

export default Dashboard;
