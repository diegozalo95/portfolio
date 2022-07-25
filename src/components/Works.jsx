import React from 'react'
import { Splide } from '@splidejs/react-splide';
import WorksItem from './WorksItem';
import '@splidejs/react-splide/css';
import '../styles/Works.scss'

const Works = () => {
  return (
    <div className='works'>
      <div className='works__container'>
        <h2 className='works__title'>Trabajos</h2>
          <div className='works__list'>
            <Splide options={ {
              type: 'loop',
              autoplay : true,
              interval: 4000,
              arrows: false,
              gap   : '1rem',
              perPage: 3,
              breakpoints: {
                800: {
                  perPage: 2
                },
                426: {
                  perPage: 1
                },
              }
            } }>
              <WorksItem name="Hovima La Pinta" url="https://www.hovimalapinta.com/es/" />
              <WorksItem name="Hovima Costa Adeje" url="https://www.hovimacostaadeje.com/es/" />
              <WorksItem name="Coral Hotels" url="https://www.coral-hotels.com/" />
              <WorksItem name="Hovima Panorama" url="https://www.hovimapanorama.com/es/" />
              <WorksItem name="Gran Hotel Son Net" url="https://www.sonnet.es/es/" />
              <WorksItem name="Anyos Park" url="https://www.anyospark.com/" />
              <WorksItem name="The Hotels" url="https://www.thehotels.ad/" />
              <WorksItem name="Holasa" url="https://holasa.com.co/" />
              <WorksItem name="Hovima Santa María" url="http://hovimasantamaria.com/" />
            </Splide>
          </div>
      </div>
    </div>
  )
}

export default Works