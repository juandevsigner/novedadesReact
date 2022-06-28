import Novedad from "./Novedad";
import { useStateContext } from "../context/ContexProvider";

const Modal = () => {
  const { modal, novedades } = useStateContext();

  return (
    <div
      className={`${
        modal ? "right-0" : " -right-full"
      } bg-gray-200 transition-all  w-full md:w-96 fixed h-screen p-5 overflow-y-scroll shadow-sm`}
    >
      <h2 className="text-center text-azul  font-bold text-xl">
        ¿Que hay de nuevo en Cuenti?
      </h2>

      {novedades?.map(({ titulo, descripcion, enlace }) => (
        <Novedad
          key={titulo}
          titulo={titulo}
          descripcion={descripcion}
          enlace={enlace}
        />
      ))}

      <a
        className="mt-5 w-full block text-white text-center p-2 rounded-full bg-azul hover:bg-azulOscuro delay-75 transition-colors"
        href="/"
      >
        Ver todas las novedades
      </a>
    </div>
  );
};

export default Modal;
