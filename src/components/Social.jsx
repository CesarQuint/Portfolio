import { SiTwitter,SiLinkedin,SiGithub } from "react-icons/si";

function Social() {
  return (
    <div className='social-grid'>
        <a id="twitter" href="https://twitter.com/Cesar_Quint_" target='_blank'><SiTwitter/> Twitter</a>
        <a id='linkdin' target='_blank' href="https://www.linkedin.com/in/cesar-quintero-267764209/" ><SiLinkedin/> Linkedin</a>
        <a id='gitHub' target='_blank' href="https://github.com/CesarQuint"><SiGithub/> GitHub</a>
    </div>
  )
}

export default Social