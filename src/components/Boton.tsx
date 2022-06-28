import { useState } from "react";
import { HiOutlineNewspaper } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import { useStateContext } from "../context/ContexProvider";

const Boton = () => {
  const { modal, setModal = () => {}, novedades } = useStateContext();

  const countNovedades = novedades?.length;

  return (
    <>
      {/*  ${
          countNovedades === 0 ? "hidden" : "fixed"
        } */}
      <div className="fixed bottom-4 right-4">
        <button
          className={`${
            modal ? "bg-red-600" : "bg-azul"
          } transition-colors delay-100  drop-shadow-lg rounded-full p-2`}
          type="button"
          onClick={() => setModal(!modal)}
        >
          {modal ? (
            <IoIosClose className="text-4xl text-white" />
          ) : (
            <HiOutlineNewspaper className="text-4xl text-white" />
          )}
        </button>
        <p
          className={`${
            modal && "hidden"
          } fixed bottom-12 right-12 text-center bg-naranjado w-6 h-6 rounded-full font-bold`}
        >
          {countNovedades}
        </p>
      </div>
    </>
  );
};

export default Boton;
