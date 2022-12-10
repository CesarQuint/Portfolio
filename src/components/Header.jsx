import {useState} from 'react'
import { BiCode as Open, BiCodeAlt as Close } from "react-icons/bi";
import NavBar from './NavBar'

function Header() {

//Menu desplegable
const[desp,setDesp]=useState(false)

const handleMenu=()=>{
    const desplegable=document.querySelector('.headerContain')
    const navegador=document.querySelectorAll('.a-menu')

   if(!desp){
    navegador.forEach(link=>{
        link.classList.add('show')
    })
    desplegable.classList.add('headerShow')
    setDesp(true)
    return
   }else{
    console.log(navegador);
    navegador.forEach(link=>{
        console.log(link);
        link.classList.remove('show')
    })
    desplegable.classList.remove('headerShow')
    setDesp(false)
   }
   
}
  return (
    <header className='headerContain'>
       <p id='iconAction' href=""
        onClick={handleMenu}
        >{desp?<Close/>:<Open/>}</p>
        <NavBar/>
    </header>
  )
}

export default Header