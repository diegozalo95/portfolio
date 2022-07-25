import React from 'react'
import { Splide } from '@splidejs/react-splide';
import ProjectsItem from './ProjectsItem'
import '../styles/Projects.scss'

import PainPhoto from '../assets/images/pain.jpg'
import ErenPhoto from '../assets/images/eren.jpg'

const Projects = () => {
  return (
    <div className='projects'>
      <div className='projects__container'>
        <h3 className='projects__title'>Proyectos</h3>
        <div className='projects__list'>
          <Splide options={ {
            type : 'loop',
            direction : 'ttb',
            autoplay : true,
            interval: 4000,
            arrows : false,
            paginationDirection : 'ttb',
            heightRatio : .55,
            fixedHeight : '90vh',
            perPage : 1,
            breakpoints : {
              426 : {
                heightRatio : 1,
                drag: false
              }
            }
          } }>
            <ProjectsItem image={PainPhoto} text="Pain maquetado con HTML & CSS" url="https://diegozalo95.github.io/pain/" />
            <ProjectsItem image={ErenPhoto} text="Eren maquetado con HTML & CSS" url="https://diegozalo95.github.io/eren/" />
          </Splide>
        </div>
      </div>
    </div>
  )
}

export default Projects