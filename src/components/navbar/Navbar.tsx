function Navbar() {
  return (
    <div
      className="
  flex
  bg-indigo-900 justify-center
  text-white"
    >
      <div className="container py-4 flex justify-between max-sm:justify-center">
        <div>
          <a href="" className="text-xl font-semibold ">
            Blog pessoal
          </a>
        </div>
        <nav>
          <ul className="flex gap-2 max-sm:hidden">
            <li>
              <a href="">Postagens</a>
            </li>
            <li>
              <a href="">Temas</a>
            </li>
            <li>
              <a href="">Cadastrar tema</a>
            </li>
            <li>
              <a href="">Perfil</a>
            </li>
            <li>
              <a href="">Sair</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
