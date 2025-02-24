import Popup from "reactjs-popup";
import FormPostagem from "../formpostagem/FormPostagem";

import "reactjs-popup/dist/index.css";
import "./Modalpostagem.css";

function ModalPostagem() {
  return (
    <>
      <Popup
        trigger={
          <button className="rounded-xl hover:bg-purple-400 hover:text-white cursor-pointer border-purple border-solid border-1 py-2 px-4 text-purple-90">
            Nova Postagem
          </button>
        }
        modal
      >
        <FormPostagem />
      </Popup>
    </>
  );
}

export default ModalPostagem;
