import NavBarCategory from "./NavBarCategory";
import SalesProducts from "./SalesProducts";
import MostViewedProducts from "./MostViewedProducts";
import NavBarButtonsMain from "./NavBarButtonsMain";

function Dashboard() {
  return (
    <>
      <h1 className='title'>encuentraprecio.com</h1>
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
        <form>
          <input type='search' placeholder='Busca el producto para comparar precios' />
          <button type='submit'>Buscar Productos</button>
        </form>
      </div>

      <SalesProducts />
      <MostViewedProducts />
    </>
  );
}

export default Dashboard;
