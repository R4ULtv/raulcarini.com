import Head from 'next/head'
import Navigation from '../components/Navigation'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <>
      <Head>
        <title>Raul Carini</title>
        <meta name="description" content="Portfolio of Raul Carini"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <nav>
        <Navigation/>
      </nav>

      <main>
      <About/>
      <Skills/>
      <Projects/>
      </main>

      <footer>
      </footer>
    </>
  )
}
