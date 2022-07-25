import React from 'react'
import EducationCourse from './EducationCourse'
import '../styles/Education.scss'

const Education = () => {
  return (
    <div className='education'>
      <div className='education__container'>
        <h3 className='education__title'>Educación</h3>
        <div className='education__categories'>
          <div className='education__colleges'>
            <div className='education__colleges-item'>
              <p className='education__colleges-dates'>2013 - 2014</p>
              <p className='education__colleges-carreer'>Diseño gráfico</p>
              <p className='education__colleges-institute'>Censa</p>
            </div>
            <div className='education__colleges-item'>
              <p className='education__colleges-dates'>2015 - 2017</p>
              <p className='education__colleges-carreer'>Producción multimedia</p>
              <p className='education__colleges-institute'>SENA</p>
            </div>
          </div>
          <div className='education__courses'>
            <p className='education__courses-title'>Platzi</p>
            <EducationCourse course="Curso de Frontend Developer" />
            <EducationCourse course="Curso de ECMAScript 6 +" />
            <EducationCourse course="Curso de Asincronismo con Javascript" />
            <EducationCourse course="Curso Práctico de React JS" />
            <EducationCourse course="Fundamentos de Javascript" />
            <EducationCourse course="Curso Profesional de Git y Github" />
            <EducationCourse course="Curso de React JS" />
            <EducationCourse course="Curso de SASS" />
            <EducationCourse course="Curso de Fundamentos de TypeScript" />
            <EducationCourse course="Curso de npm" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education