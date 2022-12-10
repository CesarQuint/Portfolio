import {useState} from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import Contact from './components/Contact'
import Landing from './components/Landing'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'

function App() {

  const[modal,setModal]=useState(false)
  const[animarModal,setAnimarModal]=useState(false)
  const[infoProject,setInfoProject]=useState({})
  
  const openInfo=(projectState)=>{
    setInfoProject({})
    setModal(true);
    setTimeout(()=>{
      setAnimarModal(true)
    },500)
    setInfoProject(projectState)
}


  return (
    <>
    <Header/>
    {modal&&<Modal
      setInfoProject={setInfoProject}
      infoProject={infoProject}
      setModal={setModal}
      animarModal={animarModal}
      setAnimarModal={setAnimarModal}
      />
    }
    <Landing/>
    <AboutMe/>
    <Projects
    openInfo={openInfo}
    />
    <Contact/>
    </>
  )
}


export default App
