import ModalPostagem from "../../components/postagem/modalpostagem/ModalPostagem";

function Home() {
  return (
    <div className="flex justify-center bg-pink-100 ">
      <div
        className="container 
      grid
      grid-cols-2
      text-purple-900
     font-code
      max-sm:flex
      max-sm:flex-col-reverse
     "
      >
        <div className="flex flex-col items-center justify-center gap-4 py-4 ">
          <h2
            className="text-5xl
          font-bold
          
          max-sm:text-2xl
          "
          >
            Seja bem-vinde!{" "}
          </h2>
          <p className="text-xl  max-sm:text-base">
            Expresse aqui seus pensamentos e opniões
          </p>
          <div className="flex justify-around gap-4 ">
            <ModalPostagem/>
          </div>
        </div>

        <div className="flex justify-center items-center ">
          <img
            src="https://ik.imagekit.io/3ov0fr7b9/usuarios/speak%20out%20girl.gif?updatedAt=1739560203323"
            alt="Imagem da pagina home"
            className="w-2/3 h-2/3"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
