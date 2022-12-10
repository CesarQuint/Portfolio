import {useState} from 'react'
import { IoLogoGameControllerB as Game,IoIosColorPalette as Paint,IoIosBook as Book,IoIosHeadset as Headset } from "react-icons/io";

function AmBig() {

    const[showId,setShowId]=useState(0)

    const handleShowMore=id=>{
         setShowId(id)
    }

    const textSelect=(showId)=>{
        switch (showId) {
            case 1:
                return(
                    <>
                 <section className='card' id='studies'>
                    <h3>My studies</h3>
                <p>I was studying
                Mechatronics Engineering in 2020 at UTP, but at the end of 2021 I decided to leave the university and study software development, especially the Web area. Before leaving the University I took courses on platforms like Platzi, FreeCodeCamp and CodeCademy on topics like HTML, CSS and C#, After that I have been taking courses on Udemy, CoderHouse and looking for documentation. In June 2022 I completed the Web Development Course and in August I completed the Course in the use of JavaScript, since then I have been learning more tools for front-end development which are listed below on the page. I believe there is always something new to learn and implement</p>

                 </section>
                </>
                )
                
               
                break;
            case 2:
                return(
                    <section  className='card' id='works'>
                    <h3>Last Works</h3>
                        <>
                        <p>
                            My work experiences are not related to web development, even so I list them because they help me to learn about other skills such as Soft Skill and a good use of time, etc...
                        </p>
                        <div className='table'>
                            <p className='jobExp'>Cinemex as Multifunctional Staff for 8 months.</p>
                            <p className='jobExp'>McCarthy's as Chef's assistant for 2 months.</p>
                            <p className='jobExp'>Alorica as Callcenter agent for 10 moths</p>
                        </div>
                        </>
                </section>
                )
               
                break;
            case 3:
                return(
                    <section  className='card' id='hobbies'>
                    <h3>Hobbies</h3>
                        <>
                        <span className='icons'><Book/></span>
                         <p>I love search and know about new topics,even if they look useless.</p>
                         <span className='icons'><Paint/></span>
                         <p>Drawing is one of my favorites things to do when i have free time.</p>
                         <span className='icons'><Headset/></span>
                         <p>Listen to new music,covers and experimental genders.</p>                
                         <span className='icons'><Game/></span>
                         <p>I like VideoGames and more when they're difficult and have puzzels like The Legend of Zelda, God Of War,The Binding of Isaac ,etc...</p>
                        </>
                    
                </section>
                )
              
                break;
        
            default: return(<></>)
                break;
        }
    
    }

  return (
    <div className='bigGrid'>
        <div onClick={()=>handleShowMore(1)} id="div1"><h3>My studies</h3></div>
        <div onClick={()=>handleShowMore(2)} id="div2"><h3>Last Works</h3></div>
        <div onClick={()=>handleShowMore(3)} id="div3"><h3>Hobbies</h3></div>
        <div id="div4">
            {showId>0&&textSelect(showId)}
        </div>
    </div>
  )
}

export default AmBig