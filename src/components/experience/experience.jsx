import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
          <div className='experience__frontend'>
            <h3> Data Analytics</h3>
            <div className="experience__content">

              <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>Python</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>Machine Learning</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>MATLAB</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>SQL and NoSql</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>Tableau</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>SAS</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
            </div>
          </div>
{/*#####################  END OF FRONTEND ##############*/}
          <div className='experience__backend'>
            <h3>Web Development</h3>

          <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>Node js</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>MySQL</h4>
                <small className='text-light'>BASIC</small>
                </div>
              </article>

              <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>BootStrap</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>Django</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
            
          </div>
      </div>
    </section>
  )
}

export default Experience