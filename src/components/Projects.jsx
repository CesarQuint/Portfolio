import React from 'react'
import Skill from './Skill.jsx';
import Project from './Project.jsx';
import {knowledge,projects} from '../helpers/main.js'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Projects({openInfo}) {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <section id='projects' className='projectsContainer'>
        <div className='skills'>
            <h2>Skills</h2>
            <Carousel
            infinite={true}
            keyBoardControl={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            removeArrowOnDeviceType	={'mobile'}
            responsive={responsive}>
                {knowledge.map(skill=>
                    <Skill
                    key={skill.id}
                    skill={skill}
                    />
                    )}
            </Carousel>;
        </div>
        <div className='projectsShow'>
            <h2>Projects</h2>
            <div className='projectsGrid'>
              {projects.map(project=>
                <Project
                openInfo={openInfo}
                key={project.id}
                project={project}/>
                )}
            </div>
        </div>
    </section>
  )
}

export default Projects