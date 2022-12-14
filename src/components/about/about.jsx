import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image' />
          </div>
        </div>
        
        <div className='about__content'>
          <div className='about__cards'>

          <article className='about__card'>
                  <VscFolderLibrary className='about__icon'/>
                  <h5>Internships at</h5>
                  <ul>
                    <li><small>GeeksforGeeks</small></li>
                    <li><small>Sparks Foundation</small></li>
                  </ul>
                 
              </article>

              <article className='about__card'>
                  <FaAward className='about__icon'/>
                  <h5>Knowledge</h5>
                  <small>3+ Years Learning and Practicing</small>
              </article>

              <article className='about__card'>
                  <VscFolderLibrary className='about__icon'/>
                  <h5>Projects</h5>
                  <small>20+ Completed</small>
              </article>

           </div>
           <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptatibus, est quaerat. Facilis excepturi qui maxime laboriosam 
            quae mollitia nostrum itaque illo reiciendis. Adipisci officia accusamus
             doloribus distinctio enim inventore omnis?
           </p>

           <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About