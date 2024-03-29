import Head from 'next/head'

import Navigation from '../components/Navigation'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Contacts from '../components/Contacts'

export async function getStaticProps(){
  var random = Math.floor(Math.random() * 5) + 1
  var skills_image = "/assets/img/skills/" + random + ".png"
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
  var skills = [
    {
      language: "PYTHON",
      percentage: "85%",
      color: "bg-blue-600",
    },
    {
      language: "JAVASCRIPT",
      percentage: "75%",
      color: "bg-yellow-500",
    },
    {
      language: "HTML/CSS",
      percentage: "90%",
      color: "bg-red-600",
    },
    {
      language: "JAVA",
      percentage: "50%",
      color: "bg-orange-600",
    }
  ]
    return {
      props : {
        skills: skills,
        skills_image: skills_image,
        projects: projects
      }
    }
}

export default function Home({skills, skills_image, projects}) {
  return (
    <>
      <Head>
        <title>Home - Raul Carini</title>
        <meta name="description" content="Portfolio of Raul Carini"/>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Home - Raul Carini"></meta>
        <meta property="og:description" content="Portfolio of Raul Carini" />
        <meta property="og:url" content="https://www.raulcarini.com"></meta>
        <meta property="og:image" content="https://raulcarini-com.vercel.app/api/og/image"/>
        <meta property="twitter:title" content="Home - Raul Carini"></meta>
        <meta property="twitter:description" content="Portfolio of Raul Carini"></meta>
        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:image" content="https://raulcarini-com.vercel.app/api/og/image"></meta>
      </Head>
      
      <Navigation/>

      <main>
        <Main/>
        <About/>
        <Skills image = {skills_image} skills = {skills}/>
        <Projects images = {projects}/>
        <Contacts/>
      </main>

      <Footer/>
    </>
  )
}
