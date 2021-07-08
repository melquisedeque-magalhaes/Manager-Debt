import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import styles from './ModalAddNewDebt.module.scss'
import { FiX } from 'react-icons/fi'
import axios from 'axios';
import { useModal } from '../../hook/useModal';

interface ModalAddNewDebtProps {
  isOpen: boolean;
  idUser: number;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    margin: '0px',
    padding: '0px',
    transform: 'translate(-50%, -50%)',
    height: '400px',
    width: '300px',
    border: '0'
  },
};

export function ModalAddNewDebt({ isOpen, idUser }: ModalAddNewDebtProps){

  const { changeModal } = useModal()

  const [ nameDebt, setNameDebt ] = useState('')
  const [ valueDebt, setValueDebt ] = useState('')

  async function handleRegisterDebt(event: FormEvent){
    event.preventDefault()

    await axios.post('https://provadev.xlab.digital/api/v1/divida?uuid=0824f082-1321-4967-8075-4a8b0a5da387/dividas', {
      idUser,
      nameDebt,
      valueDebt
    })

    changeModal(false)
  }

  return(
    <Modal
      isOpen={isOpen}
      style={customStyles}
    >
      <form
        onSubmit={handleRegisterDebt} 
        className={styles.container}
      >
        <button 
          onClick={() => changeModal(false)}
          className={styles.buttonClose}
        >
          <FiX color="#fff" size={16} />
        </button>

        <h2>
          Adicionar nova conta
        </h2>

        <input 
          className={styles.inputContainer} 
          type="text" 
          placeholder="Nome da divida"
          onChange={event => setNameDebt(event.target.value)} 
          value={nameDebt}
        />

        <input 
          className={styles.inputContainer} 
          type="text" 
          placeholder="Valor da divida" 
          onChange={event => setValueDebt(event.target.value)} 
          value={valueDebt}
        />

        <button className={styles.button} type="submit">Cadastra divida</button>

      </form>
    </Modal>
  )
} 