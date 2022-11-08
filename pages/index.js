import Head from 'next/head'
import Navigation from '../components/Navigation'
import About from '../components/About'

export default function Home() {
  return (
    <>
      <Head>
        <title>Raul Carini</title>
        <meta name="description" content="Portfolio of Raul Carini"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation/>

      <main>
      <About/>
      </main>

      <footer>
      </footer>
    </>
  )
}
