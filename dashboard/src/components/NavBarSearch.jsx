import axios from "axios";
import { useEffect, useState } from "react";

const NavBarSearch = () => {
  const url = "http://localhost:8000/products/List";
  const [products, setProducts] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const [search, setSearch] = useState("");

  const getProducts = async () => {
    await axios
      .get(url)
      .then((response) => {
        setProducts(response.data);
        setProductsList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    filterProducts(e.target.value);
  };

  const filterProducts = (terms) => {
    let searchResult = productsList.filter((product) => {
      if (product.name.toString().toLowercase().incluides(terms.toLowercase())) {
        return product;
      }
    });
    setProducts(searchResult);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div>
        <h3>Ingresa el producto que buscas</h3>
        <input
          type='search'
          value={search}
          onChange={handleChange}
          placeholder='Busca tu producto para comparar precios'
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>precio</th>
            <th>marca</th>
            <th>descripcion</th>
          </tr>
        </thead>

        <tbody>
          {products &&
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.company}</td>
                <td>{product.description}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default NavBarSearch;
