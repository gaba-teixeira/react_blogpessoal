import Tema from "./Tema";
import Usuario from "./Usuario";

export default interface Postagem {
  id: string;
  titulo: string;
  texto: string;
  data: string;
  tema: Tema | null;
  usuario: Usuario;
}
