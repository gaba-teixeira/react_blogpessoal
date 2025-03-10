import { Link } from "react-router-dom";
import Postagem from "../../../models/Postagem";

interface CardPostagemProps {
  postagem: Postagem;
}

function CardPostagem({ postagem }: CardPostagemProps) {
  return (
    <div
      className="border-purple-950 border bg-rose-100
            flex flex-col rounded-2xl overflow-hidden  m-2 font-poppins justify-between"
    >
      <div>
        <div className="flex w-full bg-pink-400 py-2 px-4 items-center gap-4">
          <img
            src={postagem.usuario?.foto}
            className="h-12 rounded-full"
            alt={postagem.usuario?.nome}
          />
          <h3 className="text-lg font-bold text-center uppercase">
            {postagem.usuario?.nome}
          </h3>
        </div>
        <div className="p-4 ">
          <h4 className="text-lg font-semibold uppercase">{postagem.titulo}</h4>
          <p>{postagem.texto}</p>
          <p>Tema: {postagem.tema?.descricao} </p>
          <p>
            Data:
            {new Intl.DateTimeFormat("pt-BR", {
              dateStyle: "short",
              timeStyle: "short",
            }).format(new Date(postagem.data))}
          </p>
        </div>
      </div>
      <div className="flex">
        <Link
          to={`/editarpostagem/${postagem.id}`}
          className="w-full text-white bg-purple-500 font-code
                    hover:bg-purple-900 flex items-center justify-center py-2"
        >
          <button>Editar</button>
        </Link>
        <Link
          to={`/deletarpostagem/${postagem.id}`}
          className="text-white bg-red-400 font-code
                    hover:bg-red-700 w-full flex items-center justify-center"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardPostagem;
