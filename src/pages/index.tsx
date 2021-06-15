import React from 'react'
import Head from 'next/head'

import ModalImg from '../assets/modal-header.svg'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <ModalImg />
        <h1>Hello World</h1>
      </main>
    </div>
  )
}

export default Home
