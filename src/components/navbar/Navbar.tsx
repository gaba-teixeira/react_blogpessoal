import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

function Navbar() {
  const navigate = useNavigate();
  const { handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert("O Usuário foi desconectado com sucesso!");
    navigate("/");
  }
  return (
    <div
      className="
  flex
  bg-purple-950
  justify-center  
       font-poppins  

  text-white"
    >
      <div className="container py-4 flex justify-between max-sm:justify-center">
        <div className="text-xl font-semibold">
          <Link to="/home"> Blog pessoal</Link>
        </div>
        <nav className="flex gap-2 max-sm:hidden">
          <Link to="/">Postagens </Link>
          <Link to="/">Temas </Link>
          <Link to="/">Cadastrar tema </Link>
          <Link to="/">Perfil </Link>
          <Link to="" onClick={logout} className="hover:underline">
            Sair
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
