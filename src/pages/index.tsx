import { GetServerSideProps } from 'next'
import React from 'react'
import { ModalAddNewDebt } from '../components/ModalAddNewDebt'
import { User } from '../components/User'
import styles from "../styles/Home.module.scss"

interface UserProps {
  id: number;
  name: string;
  email: string;
}

interface HomeProps {
  users: UserProps[]
}

export default function Home({ users }: HomeProps) {

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Manager Debt</h1>
      </div>

      <div className={styles.content}>
        { users.map(user => 
          <User key={user.id} name={user.name} id={user.id} />
        ) }
      </div>
      
    </div>
  )
}

export const getServerSideProps:GetServerSideProps = async () => {

  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()

  return {
    props: {
      users
    }
  }
}
