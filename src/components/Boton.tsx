import { HiOutlineNewspaper } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import { useStateContext } from "../context/ContexProvider";

const Boton = () => {
  const { modal, setModal = () => {}, novedades } = useStateContext();

  const countNovedades = novedades?.length;

  return (
    <>
      <div
        className={`${
          countNovedades === 0 ? "ocultarNv" : "fijarNv"
        } btnContenedorNv`}
      >
        <button
          className={`${modal ? "ColorRedNv" : "ColorAzulNv"} btnNov`}
          type="button"
          onClick={() => setModal(!modal)}
        >
          {modal ? (
            <IoIosClose className="iconoNv" />
          ) : (
            <HiOutlineNewspaper className="iconoNv" />
          )}
        </button>
        <p className={`${modal && "ocultarNv"} countNv`}>{countNovedades}</p>
      </div>
    </>
  );
};

export default Boton;
