import { BsFillBookmarkStarFill } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";

interface Props {
  titulo: string;
  descripcion: string;
  enlace?: string;
}

const Novedad = ({ titulo, descripcion, enlace }: Props) => {
  const enlaceCount: any = enlace?.length;
  return (
    <div className="tarjetaNv">
      <BsFillBookmarkStarFill className="iconoNovStar" />
      <h2 className="tituloNov">{titulo}</h2>
      <p className="parrafoNov">{descripcion}</p>
      <div className={`${enlaceCount > 0 ? "fijarBlock" : "ocultarNv"}`}>
        <div className="separadorNov"></div>
        <div className="iconoArrow">
          <div>
            <a className="enlaceNov" href={enlace} target="blank">
              Ver Más
              <BsArrowRightShort className="iconoArrow" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Novedad;
