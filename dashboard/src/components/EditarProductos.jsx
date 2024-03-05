// import React, { useState } from "react";
// import Modal from "react-modal";

// export default function EditarProductos () {

//   const [isOpen, setIsOpen] = useState(false);
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//   });

//   const handleOpenModal = () => {
//     setIsOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsOpen(false);
//   };

//   const handleChange = (event) => {
//     const newData = { ...data };
//     newData[event.target.name] = event.target.value;
//     setData(newData);
//   };

//   const handleSubmit = () => {
//     // ... enviar los datos actualizados al servidor
//     handleCloseModal();
//   };

//   return (
//     <div>
//       <button onClick={handleOpenModal}>Abrir ventana flotante</button>
//       <Modal
//         isOpen={isOpen}
//         onRequestClose={handleCloseModal}
//         contentLabel="Editar datos"
//       >
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="name">Nombre:</label>
//           <input
//             type="text"
//             name="name"
//             value={data.name}
//             onChange={handleChange}
//           />
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={data.email}
//             onChange={handleChange}
//           />
//           <button type="submit">Guardar</button>
//           <button type="button" onClick={handleCloseModal}>Salir</button>
//         </form>
//       </Modal>
//     </div>
//   );
// };
