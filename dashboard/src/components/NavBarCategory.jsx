import { useState } from "react";
import "./NavBarCategory.css";
import FilterProducts from "./FilterProduct";

export default function NavBarCategory() {
  // Estado para almacenar los valores seleccionados de los checkboxes
  const [selectedCategories, setSelectedCategories] = useState("");

  // Función para manejar el cambio de estado de los checkboxes
  const handleCheckboxChange = (category) => {
    setSelectedCategories(category);
    // console.log(category);

        // <FilterProducts category = {category}/>
   
  };
  return (
    <div className="div-seleccion">
      <div className="navbar-categories">
        <div className="category-item">
          <label className="category-label">
            Almacen:
            <input
              type="radio"
              name="category"
              checked={selectedCategories.almacen}
              onChange={() => handleCheckboxChange("1")}
            />
          </label>
        </div>
        <div className="category-item">
          <label className="category-label">
            Bebidas:
            <input
              type="radio"
              name="category"
              checked={selectedCategories.category2}
              onChange={() => handleCheckboxChange("2")}
            />
          </label>
        </div>
        <div className="category-item">
          <label className="category-label">
            Limpieza:
            <input
              type="radio"
              name="category"
              checked={selectedCategories.category3}
              onChange={() => handleCheckboxChange("3")}
            />
          </label>
        </div>
        <div className="category-item">
          <label className="category-label">
            Perfumeria:
            <input
              type="radio"
              name="category"
              checked={selectedCategories.category4}
              onChange={() => handleCheckboxChange("4")}
            />
          </label>
        </div>
        <div className="category-item">
          <label className="category-label">
            Mascotas:
            <input
              type="radio"
              name="category"
              checked={selectedCategories.category5}
              onChange={() => handleCheckboxChange("5")}
            />
          </label>
        </div>
      </div>
      {selectedCategories && <FilterProducts category={selectedCategories} />}
    </div>
  );
}
