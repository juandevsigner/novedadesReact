import { createContext, useContext, useState, useEffect } from "react";

interface Provider {
  children: JSX.Element | JSX.Element[];
}

interface NovedadesFecth {
  nombre: string;
  descripcion: string;
  enlaces: string;
}

const StateContext = createContext();

export const ContextProvider = ({ children }: Provider) => {
  const [modal, setModal] = useState(false);
  const [novedades, setNovedades] = useState([]);
  useEffect(() => {
    const obtenerNovedades = async () => {
      try {
        const url = "http://localhost:4000/novedades";
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setNovedades(resultado);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerNovedades();
  }, []);
  return (
    <StateContext.Provider
      value={{
        modal,
        setModal,
        novedades,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
