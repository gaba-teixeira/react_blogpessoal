import { useNavigate } from "react-router-dom";
import "./Cadastro.css";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Cadastro() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [confirmarSenha, setConfirmarSenha] = useState<string>("");
  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  useEffect(() => {
    if (usuario.id !== 0) {
      retornar();
    }
  }, [usuario]);

  function retornar() {
    navigate("/login");
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value);
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (confirmarSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true);
      try {
        await cadastrarUsuario("/usuarios/cadastrar", usuario, setUsuario);
        ToastAlerta("Usuario cadastrado com sucesso!", 'sucesso');
      } catch (error) {
        ToastAlerta("Erro ao cadastrar usuario", 'erro');
      }
    } else {
      ToastAlerta("Dados do usuario errado", 'erro');
      setUsuario({ ...usuario, senha: " " });
      setConfirmarSenha("");
    }
    setIsLoading(false);
  }

  return (
    <div
      className="grid grid-cols-2 h-full
         place-items-center font-bold font-poppins"
    >
      <div className="fundoCadastro"></div>
      <form
        className="flex justify-center items-center flex-col w-2/3 gap-3 mt-4"
        onSubmit={cadastrarNovoUsuario}
      >
        <h2 className="text-slate-900 text-4xl">Cadastrar</h2>    
        <div className="flex flex-col w-full">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Nome"
            className="border-2 border-purple-900npm run rounded-xl p-2"
            value={usuario.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="usuario">Usuario</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            placeholder="Usuario"
            className="border-2 border-purple-900npm run rounded-xl p-2"
            value={usuario.usuario}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="foto">Foto</label>
          <input
            type="text"
            id="foto"
            name="foto"
            placeholder="Foto"
            className="border-2 border-purple-900npm run rounded-xl p-2"
            value={usuario.foto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Senha"
            className="border-2 border-purple-900npm run rounded-xl p-2"
            value={usuario.senha}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="confirmarSenha">Confirmar Senha</label>
          <input
            type="password"
            id="confirmarSenha"
            name="confirmarSenha"
            placeholder="Confirmar Senha"
            className="border-2 border-purple-900npm run rounded-xl p-2"
            value={confirmarSenha}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleConfirmarSenha(e)
            }
          />
        </div>
        <div className="flex justify-around w-full gap-8 mt-2.5">
          <button
            type="button"
            className="rounded-xl text-white bg-red-400 
                  hover:bg-red-700 w-1/2 py-2"
            onClick={retornar}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="rounded-xl text-white bg-purple-400
                           hover:bg-purple-900   w-1/2 py-2
                           flex justify-center"
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
              <span>Cadastrar</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Cadastro;
