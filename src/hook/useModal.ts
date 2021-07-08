import { useContext } from "react";
import { ContextModal } from '../context/ContextModal'

export function useModal(){
  const value = useContext(ContextModal)

  return value
}