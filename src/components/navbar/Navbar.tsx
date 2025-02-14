import { Link } from "react-router-dom";

function Navbar() {
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
          <Link to="/login">Sair </Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
