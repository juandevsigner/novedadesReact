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
    <div className="bg-white relative shadow-sm p-5 mt-5 rounded-md">
      <BsFillBookmarkStarFill className="absolute left-1  -top-1 text-3xl text-naranjado" />
      <h2 className="font-bold mb-2 text-center">{titulo}</h2>
      <p className="text-sm text-justify mb-2">{descripcion}</p>
      <div className={`${enlaceCount > 0 ? "block" : "hidden"}`}>
        <div className="border-b absolute w-2/4 bottom-10  border-gray-200"></div>
        <div className="flex justify-end ">
          <div>
            <a
              className="text-sm bg-naranjado hover:bg-orange-600 transition-colors delay-75 text-white rounded-full p-2 flex items-center gap-2"
              href={enlace}
              target="blank"
            >
              Ver Más
              <BsArrowRightShort className="text-xl " />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Novedad;
