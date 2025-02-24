import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ReactNode, useContext } from "react";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    ToastAlerta("O Usuário foi desconectado com sucesso!", 'sucesso');
    navigate("/");
  }

  let component: ReactNode;
  
if(usuario.token !== ''){
  component=(<div
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
          <Link to="/postagens" className="hover:underline">
            Postagens
          </Link>
          <Link to="/temas" className="hover:underline">
            Temas
          </Link>
          <Link to="/cadastrartema" className="hover:underline">
            Cadastrar tema
          </Link>
          <Link to="/perfil" className="hover:underline">
            Perfil
          </Link>
          <Link to="" onClick={logout} className="hover:underline">
            Sair
          </Link>
        </nav>
      </div>
    </div>)
}

  return (
    <>

    {component}
    </>
  );
}

export default Navbar;


