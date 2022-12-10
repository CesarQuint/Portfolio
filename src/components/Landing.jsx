import React from 'react'
import Social from './Social'
import Avatar from '../assets/img/port1.jpg'

function Landing() {
  return (
    <section id='Index' className='landing'>
        <div className='img_container'>
            <img src={Avatar} alt="Imagen de perfil" />
        </div>
        <div className='name'>
            <h1>Cesar Quintero</h1>
        </div>
        <div className='description'>
           <p>Hi I'm a self taught Front End developer and enthusiastic in always learning something new.
            My current interests are improving my JavaScript and React skills. The most recent interests to learn are 
            Backend and the use of 3D JavaScript libraries. </p>
        </div>

      <Social/>
        
    </section>
  )
}

export default Landing