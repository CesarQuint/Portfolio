import {useEffect} from 'react'
import Social from './Social'
import Avatar from '../assets/img/port1.jpg'

function Landing() {

  useEffect(()=>{
    const animLetter=()=>{
      // Wrap every letter in a span
var textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.ml9',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
    }

    animLetter()

    
  },[])

  return (
    <section id='Index' className='landing'>
        <div className='img_container'>
            <img src={Avatar} alt="Imagen de perfil" />
        </div>
        <div className='name'>
          <h1 class="ml9">
            <span class="text-wrapper">
              <span class="letters">Cesar Quintero</span>
            </span>
          </h1>
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