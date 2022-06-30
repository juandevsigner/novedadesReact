import { createContext, useContext, useState, useEffect } from "react";

interface Provider {
  children: JSX.Element | JSX.Element[];
}

interface NovedadesAPI {
  titulo: string;
  descripcion: string;
  enlace?: string;
}

interface ValueProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  novedades: NovedadesAPI[];
}

const StateContext: React.Context<ValueProps> = createContext({} as ValueProps);

export const ContextProvider = ({ children }: Provider) => {
  const [modal, setModal] = useState(false);
  const [novedades, setNovedades] = useState([]);
  useEffect(() => {
    const obtenerNovedades = async () => {
      try {
        const url =
          "https://my-json-server.typicode.com/juandevsigner/novedadesReact/novedades";
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
