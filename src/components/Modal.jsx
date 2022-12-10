import React from 'react'
import { BiCodeAlt } from "react-icons/bi";
import { SiNetlify,SiGithub } from "react-icons/si";

function Modal({setInfoProject,infoProject,setModal,animarModal,setAnimarModal}) {
    const{name,img,descrip,video,techs,linkRep,linkDemo}=infoProject

    const ocultarModal=()=>{
        setAnimarModal(false);
            setTimeout(() => {
                setInfoProject({});
                setModal(false);
            }, 500);
    }
    
  return (
<div className='modal'>
    <div 
     onClick={ocultarModal}
    className='cerrar-modal'>
       <BiCodeAlt
       />
    </div> 
    <section className={`section ${animarModal ? "animar":'cerrar'}`}>
        <div className='title'>
            <h2>{name}</h2>
        </div>
        
        <div className='media'>
            {img.map(singleImg=>
        
            <img 
            key={singleImg}
            src={singleImg} alt="" />
            )}
            {video.length&& 
            <video  height="240" controls>
            <source src={video} type="video/mp4"/>
            </video>
            }
            
            <div className='tech-flex'>
            {techs.map(tech=>
            <p key={tech}>{tech}</p>
            )}
            </div>
        </div>
        <div className='div-3'>
            <p id='descrip'>{descrip}</p>
            <section className='links'>
                <a 
                target='_blank'
                href={linkDemo}><SiNetlify/><span>Demo</span></a>
                <a
                target='_blank' 
                href={linkRep}><SiGithub/><span>Repository</span></a>
            </section>
        </div>
      
       </section>
</div>
  )
}

export default Modal