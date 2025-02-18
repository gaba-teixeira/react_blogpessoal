import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Tema from "../../../models/Tema";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";

function FormTema() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [tema, setTema] = useState<Tema>({} as Tema);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
      alert("Você precisa fazer o login!");
      navigate("/");
    }
  }, [token]);


    useEffect(() => {
      if (id !== undefined) {
        buscarTemasPorId(id)
      }
    }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setTema({
      ...tema,
      [e.target.name]: e.target.value,
    });
  }

  async function gerarNovoTema(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    if (id !== undefined) {
      try {
        await atualizar("/temas", tema, setTema, {
          headers: { Authorization: token },
        });
        alert("Tema atualizado com sucesso");
      } catch (error: any) {
        if (error.toString().includes("401")) {
          handleLogout();
        } else {
          alert("Erro ao atualizar o tema");
        } 
      }
    } else {
      try {
        await cadastrar("/temas", tema, setTema, {
          headers: { Authorization: token },
        });
        alert("Tema cadastrado com sucesso");
      } catch (error: any) {
        if (error.toString().includes("401")) {
          handleLogout();
        } else {
          alert("Erro ao cadastrar o tema");
        }
      }
    }
    setIsLoading(false);
    retornar();
  }
  function retornar() {
    navigate("/temas");
  }

  return (
    <div className="flex flex-col gap-4 justify-center items-center m-8">
      <h1 className=" font-poppins text-4xl m-4 ">
        {id === undefined ? "Cadastrar Tema" : "Editar Tema"}
      </h1>
      <form className="flex flex-col w-1/2 gap-2" onSubmit={gerarNovoTema}>
        <label>Descrição do Tema</label>
        <input
          type="text"
          id="descricao"
          name="descricao"
          placeholder="Descreve aqui seu texto"
          value={tema.descricao}
          onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          className="border-2 rounded-1xl border-purple-400 focus:border-purple-800 focus:outline  w-160 p-2"
        ></input>
        <button
          className="rounded-2xl text-slate-100 bg-purple-500
                               hover:bg-purple-900 w-2/5 py-2 mx-auto flex justify-center mt-2 cursor-pointer"
          type="submit"
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
            <span> {id === undefined ? "Cadastrar" : "Atualizar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormTema;
