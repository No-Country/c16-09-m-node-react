const LoginWelcome = () => {
  const userDataString = localStorage.getItem("userData");
  const userData = JSON.parse(userDataString);

  if (!userData) {
    return <h3>Ingresa a tu cuenta para ver todas las ofertas para ver todas las ofertas!</h3>;
  }

  const { name, lastName } = userData;

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userData");
    window.location.href = "/login";
  };

  return (
    <div>
      <h3>
        Bienvenido {name} {lastName}
      </h3>
      <button onClick={handleLogout}>Cerrar Sesion</button>
    </div>
  );
};

export default LoginWelcome;
