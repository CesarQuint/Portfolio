import {useState,useEffect} from 'react'
import AmBig from './amBig';
import AmSmall from './AmSmall';
import { IoLogoGameControllerB as Game,IoIosColorPalette as Paint,IoIosBook as Book,IoIosHeadset as Headset } from "react-icons/io";

function AboutMe() {
    const[showId,setShowId]=useState(0)
    const[width,setWidth]=useState(window.innerWidth)

    const changeWidth=()=>{
       setWidth(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener('resize',changeWidth)

        return()=>{
            window.removeEventListener('resize',changeWidth)
        }

    },[])

    const handleShowMore=id=>{
        if(showId>0){
            setShowId(0)
            setShowId(id)
        }
         setShowId(id)
    }

  return (
    <section id='About' className='aboutMeContainer'>
        <h2>About Me</h2>
   {width>=768?(
    <AmBig/>
   ):(
    <AmSmall/> 
   )}
   
    </section>
  )
}

export default AboutMe