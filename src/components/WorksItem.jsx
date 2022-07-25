import React from 'react'
import { SplideSlide } from '@splidejs/react-splide';

const WorksItem = ({ name, url }) => {
  return (
    <SplideSlide>
      <a href={ url } target="_blank" rel="noopener noreferrer" className='works__link'>
        <h3 className='works__name'>{ name }</h3>
        <span className='works__see'>Visitar web</span>
      </a>
    </SplideSlide>
  )
}

export default WorksItem