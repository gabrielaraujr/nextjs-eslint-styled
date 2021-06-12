import React from 'react'
import Head from 'next/head'

import modalImg from '../assets/modal-header.svg'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <img src={modalImg} alt="" />
        <h1>Hello World</h1>
      </main>
    </div>
  )
}

export default Home
