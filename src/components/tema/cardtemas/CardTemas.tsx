import { Link } from "react-router-dom";
import Tema from "../../../models/Tema";


interface CardTemasProps {
  tema: Tema;
}
function CardTemas({ tema }:  CardTemasProps) {
 



  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between   m-2 font-poppins">
      <header className="py-2 px-6 bg-purple-900 text-white font-bold text-xl">
        Tema
      </header>
      <p className="p-6 text-2xl bg-pink-200 h-full">{tema.descricao}</p>
      <div className="flex">
        <Link
          to={
            `/editartema/${tema.id}`
          }
          className="w-full text-slate-100 bg-purple-400 hover:bg-purple-950 
                        flex items-center justify-center py-2 cursor-pointer"
        >
          <button>Editar</button>
        </Link>

        <Link
          to=  {`/deletartema/${tema.id}`}
          className="text-slate-100 bg-pink-400 hover:bg-pink-900 w-full 
                    flex items-center justify-center cursor-pointer"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardTemas;
