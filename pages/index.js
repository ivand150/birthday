/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import  Button  from './styles'
import Confetti from 'react-confetti'
import YouTube from 'react-youtube';

export default function Home() {
  const [startConfetti, setConfetti] = useState(false)
  const [rickkRolled, setRickrolled] = useState(false)
  const [videoSize, setVideoSize] = useState("640")

  const handleClick = () => {
    setConfetti(true)
    setTimeout(() => setRickrolled(true), 3000)
  }

  const onPlayerReady = (event) => {
    event.target.playVideo();
  }

  const opts = {
    height: "390",
    width: videoSize,
    playerVars: {
      autoplay: 1,
      controls: 0,
    },
  };

  useEffect(() => {
    if(window.innerWidth <= 600) setVideoSize("360")
  },[])

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
            {rickkRolled && <YouTube videoId="jIQ6UV2onyI" opts={opts}  onReady={onPlayerReady}/>}
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
