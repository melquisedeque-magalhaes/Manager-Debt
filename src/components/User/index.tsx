import { useState } from 'react'
import Link from 'next/link'
import styles from './User.module.scss'
import { ModalAddNewDebt } from '../ModalAddNewDebt'
import { useModal } from '../../hook/useModal'

interface UserProps {
  name: string;
  id: number;
}

export function User({ name, id }: UserProps) {

  const { setOpenModal, openModal } = useModal()

  const [ idUser, setIdUser ] = useState(0)

  function handleOpenModal(id: number){
    setOpenModal(!openModal)
    setIdUser(id)
  }

  return(
    <>
      <Link href="#">
        <a className={styles.container}>
          <div className={styles.avatar} />
          <div className={styles.title}>
            <span>{name || 'Melqui'}</span>
          </div>
          
          <button 
            className={styles.styled}
            onClick={() => handleOpenModal(id)}
          >
            Adicionar novas dividas
          </button>

          <button 
            className={styles.styled}
          >
            Listar dividas
          </button>

        </a>
      </Link>
      <ModalAddNewDebt isOpen={openModal} idUser={idUser} />
    </>
  )
}