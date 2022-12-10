import cafe1 from '../assets/img/cafe.png'
import piano1 from '../assets/img/piano-1.png'
import piano2 from '../assets/img/piano-2.png'
import todo1 from '../assets/img/toDo-1.png'
import todo2 from '../assets/img/toDo-2.png'
import cafeVideo from '../assets/videos/demo.mp4'

const aboutMe=[

]

export const knowledge=[
    {
        name:'html',
        id:1,
        description:'HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages.'
    },
    {
        name:'css',
        id:2,
        description:'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language.'
    },
    {
        name:'javaScript',
        id:3,
        description:'JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images,etc..'
    },
    {
        name:'bootStrap',
        id:4,
        description:'Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites.'
    },
    {
        name:'tailwind',
        id:5,
        description:'A utility-first CSS framework packed with classes like flex , pt-4 , text-center and rotate-90 that can be composed to build any design.'
    },
    {
        name:'sass',
        id:6,
        description:'Sass stands for Syntactically Awesome Stylesheet · Sass is an extension to CSS · Sass is a CSS pre-processor.'
    },
    {
        name:'react',
        id:7,
        description:'React is a JavaScript library focused on creating declarative user interfaces (UIs) using a component-based concept.'
    },
    {
        name:'npm',
        id:8,
        description:'npm is the worlds largest Software Registry. The registry contains over 800,000 code packages.'
    },
    {
        name:'git',
        id:9,
        description:'Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.'
    },
    {
        name:'gitHub',
        id:10,
        description:'GitHub is a for-profit company offering a cloud-based Git repository that helps developers store, manage, track and control changes to their code.'
    },
    {
        name:'remix',
        id:11,
        description:'Remix is a full stack web framework that lets you focus on the user interface and work back through web standards to deliver a fast, slick, and resilient user experience.'
    },
    {
        name:'vite',
        id:12,
        description:'Vite. js allows developers to set up a development environment for frameworks like Vue, TezJS and React and even for Vanilla JavaScript app with a dev server.'
    },
  
]

export const projects=[
{
    id:1,
    name:'To-Do List',
    img:[todo1,todo2],
    video:'',
    techs:['HTML','CSS','JS','REACT','TAILWIND','NPM','VITE'],
    descrip:'ToDo List that helps to structure the day with a satisfaction Graph and API request of random daily advices',
    linkRep:'https://github.com/CesarQuint/ToDoList',
    linkDemo:'https://cesarquintto-do-list.netlify.app/'
},
{
    id:2,
    name:'Cafe Puebla',
    img:[cafe1],
    video:cafeVideo,
    techs:['HTML','CSS','JS','REACT','NPM','REMIX'],
    descrip:'This Blog was made with Strapi as Backend Manager so in the demo i was not able to upload the API that was created ,even so I share you the video of the page working and responsive ',
    linkRep:'https://github.com/CesarQuint/CafePuebla',
    linkDemo:'https://cafepuebla.netlify.app/'
},
{
    id:3,
    name:'Funny Keyboard',
    img:[piano1,piano2],
    video:'',
    techs:['HTML','CSS','JS','REACT','NPM','VITE'],
    descrip:'Responsive Keyboard made with the objetive to show a better use of css properties ',
    linkRep:'https://github.com/CesarQuint/FunnyKeyboard',
    linkDemo:'https://funny-keyboard.netlify.app/'
}

]