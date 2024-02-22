import { useState } from "react";
import "./NavBarCategory.css";

export default function NavBarCategory() {
  // Estado para almacenar los valores seleccionados de los checkboxes
  const [selectedCategories, setSelectedCategories] = useState({
    category1: false,
    category2: false,
    category3: false,
    category4: false,
    category5: false,
  });

  // Función para manejar el cambio de estado de los checkboxes
  const handleCheckboxChange = (category) => {
    setSelectedCategories({ ...selectedCategories, [category]: !selectedCategories[category] });
  };
  return (
    <div className='navbar-categories'>
      <div className='category-item'>
        <label className='category-label'>
          Almacen:
          <input
            type='checkbox'
            checked={selectedCategories.category1}
            onChange={() => handleCheckboxChange("category1")}
          />
        </label>
      </div>
      <div className='category-item'>
        <label className='category-label'>
          Bebidas:
          <input
            type='checkbox'
            checked={selectedCategories.category2}
            onChange={() => handleCheckboxChange("category2")}
          />
        </label>
      </div>
      <div className='category-item'>
        <label className='category-label'>
          Limpieza:
          <input
            type='checkbox'
            checked={selectedCategories.category3}
            onChange={() => handleCheckboxChange("category3")}
          />
        </label>
      </div>
      <div className='category-item'>
        <label className='category-label'>
          Perfumeria:
          <input
            type='checkbox'
            checked={selectedCategories.category4}
            onChange={() => handleCheckboxChange("category4")}
          />
        </label>
      </div>
      <div className='category-item'>
        <label className='category-label'>
          Mascotas:
          <input
            type='checkbox'
            checked={selectedCategories.category5}
            onChange={() => handleCheckboxChange("category5")}
          />
        </label>
      </div>
    </div>
  );
}
