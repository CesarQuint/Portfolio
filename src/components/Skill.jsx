import React from 'react'
import { 
SiHtml5,
SiCss3,
SiJavascript,
SiBootstrap,
SiTailwindcss,
SiReact,
SiVite,
SiSass,
SiNpm,
SiGit,
SiGithub
     } from "react-icons/si";

function Skill({skill,setPresionado}) {
    const{name,description,id}=skill
    const setIcono=(id)=>{
    switch(id) {
        case 1:
                return < SiHtml5/>
            break;
        case 2:
                return < SiCss3/>
            break;
        case 3:
                return < SiJavascript/>
            break;
        case 4:
                return < SiBootstrap/>
            break;
        case 5:
                return < SiTailwindcss/>
            break;
        case 6:
                return < SiSass/>
            break;
        case 7:
                return < SiReact/>
            break;
        case 8:
                return < SiNpm/>
            break;
        case 9:
                return < SiGit/>
            break;
        case 10:
                return < SiGithub/>
            break;
        case 11:
                return <>R</>
            break;
        case 12:
                return < SiVite/>
            break;
   
        default:
            break;
    }

    }

    const icono=setIcono(id);

  return (
    <div 
    className='sCard'>
        <h3>{name}</h3>
        <p className={name}>
        {icono}</p>
        <span>{description}</span>
    </div>
  )
}

export default Skill