import "./Cadastro.css";

function Cadastro() {
  return (
    <div
      className="grid grid-cols-2 h-full
         place-items-center font-bold"
    >
      <div className="fundoCadastro"></div>
      <form className="flex justify-center items-center flex-col w-2/3 gap-3">
        <h2 className="text-slate-900 text-4xl">Cadastrar</h2>
        <div className="flex flex-col w-full">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Nome"
            className="border-2 border-slate-700 rounded-xl p-2"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="usuario">Usuario</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            placeholder="Usuario"
            className="border-2 border-slate-700 rounded-xl p-2"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="foto">Foto</label>
          <input
            type="text"
            id="foto"
            name="foto"
            placeholder="Foto"
            className="border-2 border-slate-700 rounded-xl p-2"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Senha"
            className="border-2 border-slate-700 rounded-xl p-2"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="confirmarSenha">Confirmar Senha</label>
          <input
            type="password"
            id="confirmarSenha"
            name="confirmarSenha"
            placeholder="Confirmar Senha"
            className="border-2 border-slate-700 rounded-xl p-2"
          />
        </div>
        <div className="flex justify-around w-full gap-8 mt-2.5">
          <button
            className="rounded-xl text-white bg-red-400 
                  hover:bg-red-700 w-1/2 py-2"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="rounded-xl text-white bg-indigo-400 
                           hover:bg-indigo-900 w-1/2 py-2
                           flex justify-center"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Cadastro;
