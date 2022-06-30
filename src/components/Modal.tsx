import Novedad from "./Novedad";
import { useStateContext } from "../context/ContexProvider";

interface Novedades {
  titulo: string;
  descripcion: string;
  enlace?: string;
}

const Modal = () => {
  const { modal, novedades } = useStateContext();

  return (
    <div className={`${modal ? "ModDereNv" : "ModMenosDereNv"} ModNv`}>
      <h2 className="tituloModNv">¿Que hay de nuevo en Cuenti?</h2>

      {novedades?.map(({ titulo, descripcion, enlace }: Novedades) => (
        <Novedad
          key={titulo}
          titulo={titulo}
          descripcion={descripcion}
          enlace={enlace}
        />
      ))}

      <a
        target="blank"
        className="btnEnlaceModNv"
        href="https://cuenti.com/novedades/"
      >
        Ver todas las novedades
      </a>
    </div>
  );
};

export default Modal;
