import {useState} from 'react'

function Contact() {
const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [subject,setSubject]=useState('')
const [content,setContent]=useState('')

const handleSubmit=e=>{
  if([name,email,subject,content].includes('')){
    alert('All fields must be filled')
    e.preventDefault();
  }
}

  return (
    <section id='contact' className='contact-contain'>
        <h2>Contact Me</h2>
        <form 
        onSubmit={e=>handleSubmit(e)}
        action="https://formsubmit.co/ac19118805bc6fc0ceba931a2acde68e"  method="POST">   
            <div className='inputSection'>
                <label>Name:</label>
                <input type="text" name="name" id="" value={name}  onChange={e=>setName(e.target.value)} placeholder='Name' />
            </div>
             <div className='inputSection'>
                <label>E-mail:</label>
                <input placeholder='E-mail' type="email" name="email" id="" value={email} onChange={e=>setEmail(e.target.value)} />
            </div>
             <div className='inputSection'>
                <label>Subject:</label> 
                <input placeholder='Subject' type="text" name="subject" id="" value={subject} onChange={e=>setSubject(e.target.value)} />
            </div>
             <div className='inputSection'>
                <label>Comments:</label>
                <textarea placeholder='Hi....' name="content" id="" cols="30" rows="10" value={content} onChange={e=>setContent(e.target.value)}>
                </textarea>

            </div>

            <button type="submit">Send E-mail</button>
            <input type="hidden" name="_next" value="https://cesarquinteroportfolio.netlify.app/"/>
        </form>
    </section>
  )
}

export default Contact