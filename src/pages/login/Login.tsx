import './Login.css'

function Login() {
  return (
    <div className="grid grid-cols-2 h-full place-items-center font-bold ">
      <form className="flex justify-center items-center flex-col w-1/2 gap-4">
        <h2 className="text-slate-900 text-4xl ">Entrar</h2>
        <div className="flex flex-col w-full">
          <label htmlFor="usuario">Usuário</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            placeholder="Usuario"
            className="border-2 w-full  border-purple-950 rounded-xl p-2"
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
          />
        </div>
        <button
          type="submit"
          className="rounded-xl  bg-purple-500 flex justify-center
                                   hover:bg-purple-950 text-white w-1/2 py-2"
        >
          <span>Entrar</span>
        </button>

        <hr className="border-slate-800 w-full" />

        <p>Ainda não tem uma conta? Cadastre-se</p>
      </form>
      <div className="fundoLogin "></div>
    </div>
  );
}

export default Login