import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

function Footer() {
  return (
    <div className="flex justify-center bg-indigo-900 text-white">
      <div className="container flex flex-col items-center py-4 gap-2       ">
        <p className="text-xl font-bold">
          {" "}
          Blog Pessoal Generation | Copyright: 2025
        </p>
        <p className="text-base">Acesse nossas redes sociais</p>
        <div className="flex gap-2  ">
          <a href="" target="blank">
            <LinkedinLogo size={42} color="#ffffff" />
          </a>
          <a href="" target="blank">
            <GithubLogo size={42} color="#ffffff" />
          </a>
          <a href="" target="blank">
            <InstagramLogo size={42} color="#ffffff" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
