import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import { ReactNode, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Footer() {
  let data = new Date().getFullYear();

  const { usuario } = useContext(AuthContext);

  let component: ReactNode;

  if (usuario.token !== "") {
    component = (
      <div className="flex justify-center bg-purple-950 text-white w-full bottom-0  ">
        <div className="container flex flex-col items-center py-4 gap-1  ">
          <p className="text-lg font-bold max-sm:text-lg">
            Blog Pessoal Generation | Copyright: {data}
          </p>
          <p className="text-base max-sm:text-sm">
            Acesse nossas redes sociais
          </p>
          <div className="flex gap-2  ">
            <a href="https://www.linkedin.com/in/gaba-teixeira/" target="blank">
              <LinkedinLogo size={38} color="#ffffff" />
            </a>
            <a href="https://github.com/gaba-teixeira" target="blank">
              <GithubLogo size={38} color="#ffffff" />
            </a>
            <a href="https://www.instagram.com/gaba.andrade/" target="blank">
              <InstagramLogo size={38} color="#ffffff" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  return <>{component}</>;
}

export default Footer;
