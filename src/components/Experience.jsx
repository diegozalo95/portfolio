import React from 'react'
import ExperienceItem from './ExperienceItem'
import '../styles/Experience.scss'

const Experience = () => {
  return (
    <div className='experience'>
      <div className='experience__container'>
        <h3 className='experience__title'>Experience laboral</h3>
        <div className='experience__list'>
          <ExperienceItem date='2014 - 2016' company='Que impresión'
            description='Ayudante en centro de impresión, encargado de estampar, imprimir y diseñar.'/>
          <ExperienceItem date='2017 - 2019' company='Latitude digital'
            description='Encargado del desarrollo front end y diseño de páginas web, landing pages y mailings, manejar redes sociales y capacitar clientes.'/>
          <ExperienceItem date='2019 - Actualmente' company='Roiback'
            description='Encargado del desarrollo front end y optimización del performance de sitios web.'/>
        </div>
      </div>
    </div>
  )
}

export default Experience