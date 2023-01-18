import Head from 'next/head'

import Navigation from '../components/Navigation'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

export async function getStaticProps(){
  var random = Math.floor(Math.random() * 5) + 1
  var skills = "/assets/img/skills/" + random + ".png"
  var projects = [
    {
        title: "SIFFREDI BOT",
        url: "https://github.com/R4ULtv/siffredi-bot",
        src: "/assets/img/projects/siffredi-bot/" + random + ".png"
    },
    {
        title: "CHAT ROOM",
        url: "https://github.com/R4ULtv/socket-live-chat",
        src: "/assets/img/projects/chat-room-socket/" + random + ".png"
    },
    {
        title: "SECURITY CAMERA",
        url: "https://github.com/R4ULtv/security-camera-OpenCV",
        src: "/assets/img/projects/security-camera-opencv/" + random + ".png"
    },
    {
        title: "EASY PROJECTS",
        url: "https://github.com/R4ULtv/easy-project",
        src: "/assets/img/projects/easy-projects/" + random + ".png"
    },
    {
        title: "PYTHON BASICS",
        url: "https://github.com/R4ULtv/python-basics",
        src: "/assets/img/projects/python-basics/" + random + ".png"
    },
  ]
    return {
      props : {
        skills: skills,
        projects: projects
      }
    }
}

export default function Home({skills, projects}) {
  return (
    <>
      <Head>
        <title>Home - Raul Carini</title>
        <meta name="description" content="Portfolio of Raul Carini"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navigation/>

      <main>
        <About/>
        <Skills image = {skills}/>
        <Projects images = {projects}/>
      </main>

      <Footer/>
    </>
  )
}
