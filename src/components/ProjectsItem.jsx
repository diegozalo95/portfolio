import React from 'react'
import { SplideSlide } from '@splidejs/react-splide';

const ProjectsItem = ({ image, text, url }) => {
  return (
    <SplideSlide>
      <div className='projects__item'>
          <img src={ image } alt={ text } className='projects__image' loading='lazy' />
          <div className='projects__content'>
            <p className='projects__text'>{ text }</p>
            <a href={ url } target={"_blank"} className='projects__link'>Ver proyecto</a>
          </div>
      </div>
    </SplideSlide>
  )
}

export default ProjectsItem