import { createContext, ReactNode, useState } from "react";

interface ContextModalType {
  openModal: boolean;
  changeModal: (openModal: boolean) => void;
}

interface ContextModalProviderProps {
  children: ReactNode;
}

export const ContextModal = createContext({} as ContextModalType)

export function ContextModalProvider({ children }: ContextModalProviderProps){

  const [ openModal, setOpenModal ] = useState(false)

  function changeModal(openModal: boolean){
    setOpenModal(openModal)
  }

  return(
    <ContextModal.Provider value={{ openModal, changeModal }}>
      {children}
    </ContextModal.Provider>
  )
}