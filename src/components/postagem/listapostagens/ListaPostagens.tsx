import { useNavigate } from "react-router-dom";
import CardPostagem from "../cardpostagem/CardPostagem";
import { useContext, useEffect, useState } from "react";
import Postagem from "../../../models/Postagem";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar } from "../../../services/Service";
import { DNA } from "react-loader-spinner";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function ListaPostagens() {
  const navigate = useNavigate();

  //Declarando o estado da postagem, onde monitoraremos o tamanho do array para renderizar os cards em tela
  const [postagens, setPostagens] = useState<Postagem[]>([]);

  //pegando o usuario e a função de logout da context para acessar o token
  const { usuario, handleLogout } = useContext(AuthContext);

  //Declarando o token
  const token = usuario.token;

  //Função de buscarPostagem - importando o metodo 'buscar' da service e chamando a função logout se der erro no token
  async function buscarPostagens() {
    try {
      await buscar("/postagens", setPostagens, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
      }
    }
  }

  //useEffect para ToastAlertaar sobre o token e redirecionar para o login, monitora o token
  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado", "info");
      navigate("/");
    }
  }, [token]);

  //useEffect para chamar função de busca, monitora o tamanho da postagem.
  useEffect(() => {
    buscarPostagens();
  }, [postagens.length]);

  return (
    <>
      {postagens.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col mx-2">
          <div
            className="container mx-auto my-4 
                        grid grid-cols-1 md:grid-cols-2 
                        lg:grid-cols-3 gap-4"
          >
            {postagens.map((postagem) => (
              <CardPostagem key={postagem.id} postagem={postagem} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaPostagens;
