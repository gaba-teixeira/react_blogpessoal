import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import UsuarioLogin from "../../models/UsuarioLogin";
import { AuthContext } from "../../contexts/AuthContext";
import { RotatingLines } from "react-loader-spinner";

function Login() {
  const navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );
  const { usuario, handleLogin, isLoading } = useContext(AuthContext);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/home");
    }
  }, [usuario]);

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }
  console.log(JSON.stringify(usuarioLogin));
  return (
    <div className="grid grid-cols-2 h-full place-items-center font-bold font-poppins">
      <form
        className="flex justify-center items-center flex-col w-1/2 gap-4"
        onSubmit={login}
      >
        <h2 className="text-slate-900 text-4xl ">Entrar</h2>
        <div className="flex flex-col w-full">
          <label htmlFor="usuario">Usuário</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            placeholder="Usuario"
            className="border-2 w-full  border-purple-950 rounded-xl p-2"
            value={usuarioLogin.usuario}
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
            className="border-2  border-purple-950 rounded-xl p-2"
            value={usuarioLogin.senha}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          type="submit"
          className="rounded-xl  bg-purple-500 flex justify-center
                                   hover:bg-purple-950 text-white w-1/2 py-2 cursor-pointer"
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
            <span>Entrar</span>
          )}
        </button>

        <hr className="border-slate-800 w-full" />

        <p>
          Ainda não tem uma conta?{" "}
          <Link
            to="/cadastro"
            className="underline text-indigo-700 hover:text-purple-600"
          >
            Cadastre-se
          </Link>
        </p>
      </form>
      <div className="fundoLogin "></div>
    </div>
  );
}

export default Login;
