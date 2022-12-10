import {useState} from 'react'

function Project({project,openInfo}) {
    const{name,img,descrip}=project


  return (
    <div className='cardProject'>
        <h3>{name}</h3>
        <img src={img[0]} alt="" />
        <p>{descrip}</p>

      <button 
      onClick={()=>openInfo(project)}
      type="submit">See more..</button>
    </div>
  )
}

export default Project