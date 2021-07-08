import { createContext, ReactNode, useState } from "react";

interface ContextModalType {
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
}

interface ContextModalProviderProps {
  children: ReactNode;
}

export const ContextModal = createContext({} as ContextModalType)

export function ContextModalProvider({ children }: ContextModalProviderProps){

  const [ openModal, setOpenModal ] = useState(false)

  return(
    <ContextModal.Provider value={{ openModal, setOpenModal }}>
      {children}
    </ContextModal.Provider>
  )
}