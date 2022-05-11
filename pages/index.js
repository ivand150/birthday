/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import  Button  from './styles'
import Confetti from 'react-confetti'
import YouTube from 'react-youtube';

export default function Home() {
  const [startConfetti, setConfetti] = useState(false)
  const [rickkRolled, useRickrolled] = useState(false)

  const handleClick = () => {
    setConfetti(true)
    setTimeout(() => useRickrolled(true), 5000)
  }

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
      controls: 0,
    },
  };



  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {startConfetti && (
          <>
            <Confetti/>
            {!rickkRolled && <h1 className={styles.title}>
              HAPPY BIRTHDAY
            </h1>}
            {rickkRolled && <YouTube videoId="dQw4w9WgXcQ" opts={opts} />}
          </>
        )}

        {!startConfetti &&(
          <>
            <h1 className={styles.title}>
            Is today your birthday?
            </h1>

            <Button onClick={handleClick}>Yes!!!!!!!!!!</Button>
          </>
        )}
      </main>


    </div>
  )
}
