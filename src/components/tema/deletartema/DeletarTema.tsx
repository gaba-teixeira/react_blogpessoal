import { Link, useNavigate, useParams } from "react-router-dom";
import Tema from "../../../models/Tema";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar, deletar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import { ToastAlerta } from "../../../utils/ToastAlerta";


function DeletarTema() {
  const navigate = useNavigate();
  const [tema, setTema] = useState<Tema>({} as Tema);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const { id } = useParams<{ id: string }>();

  async function buscarTemasPorId(id: string) {
    try {
      await buscar(`/temas/${id}`, setTema, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
    ToastAlerta("Você precisa fazer o login!", "info");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarTemasPorId(id);
    }
  }, [id]);

  async function deletarTema() {
    setIsLoading(true);
    try {
      await deletar(`temas/${id}`, {
        headers: { Authorization: token },
      });
      ToastAlerta("Tema deletado com sucesso", "sucesso");
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
      } else {
        ToastAlerta("Erro ao excluir tema!", "erro");
      }
    }
    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/temas");
  }

  return (
    <div className="container w-1/3 mx-auto mt-8">
      <div className="">
        <h1 className="text-4xl text-center font-poppins my-4">Deletar tema</h1>
        <p className="text-center font-semibold mb-4">
          Você tem certeza de que deseja apagar o tema a seguir?
        </p>
      </div>
      <div className="border font-poppins flex flex-col rounded-2xl overflow-hidden justify-between w-md mt-8 m-2">
        <header className="py-2 px-6 bg-purple-900 text-white font-bold text-xl">
          Tema
        </header>
        <p className="p-6 text-2xl bg-pink-200 h-full">{tema.descricao}</p>
        <div className="flex">
          <button
            className="text-slate-100 bg-pink-400 hover:bg-pink-900 w-full 
                    flex items-center justify-center font-code cursor-pointer"
            onClick={retornar}
          >
            Não
          </button>

          <button
            className="w-full text-slate-100 bg-purple-400 hover:bg-purple-950 
                        flex items-center justify-center py-2 cursor-pointer font-code"
            onClick={deletarTema}
          >
            {isLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            ) : (
              <span>Sim</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
export default DeletarTema;


