import React from 'react'
import '../styles/Info.scss'
import profilePicture from '../assets/images/foto-perfil.jpg'
import { MdMailOutline } from 'react-icons/md';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const Info = () => {
  return (
    <div className='info'>
      <div className='info__container'>
        <div className='info__image animate__animated animate__bounce'>
          <img src={profilePicture} loading="lazy" alt="Diego Zapata López - Desarrollador front end" />
        </div>
        <div className='info__description'>
          <h1 className='info__title'>Diego Fernando Zapata López</h1>
          <h2 className='info__subtitle'> Desarrollador Front-end y diseñador </h2>
          <p className='info__paragraph'>
            Soy una persona responsable, apasionado por el aprendizaje y la innovación, bueno para trabajar en equipo, proponer ideas nuevas y seguir órdenes. <br />
            Mi lado de diseñador me lleva a ser detallista.</p> <br /> <br />
          <p className='info__paragraph'><b>Ubicación:</b> Medellín, Colombia.</p>
          <p className='info__paragraph'><b>Experiencia:</b> 4 años y 6 meses.</p>
        </div>
      </div>
      <div className='info__contact'>
        <div className='info__contact-item'>
          <a href='mailto:diegozalo57@gmail.com'
            className='info__contact-link'
            target={'_blank'}><MdMailOutline /></a>
          </div>
        <div className='info__contact-item'>
          <a href='https://www.linkedin.com/in/diego-zapata-lopez-757943190/'
            className='info__contact-link'
            target={'_blank'}><FaLinkedin /></a>
        </div>
        <div className='info__contact-item'>
          <a href='https://www.instagram.com/diegozalo95_/?hl=es-la'
            className='info__contact-link'
            target={'_blank'}><FaInstagram /></a>
        </div>
        <div className='info__contact-item'>
          <a href='https://github.com/diegozalo95'
            className='info__contact-link'
            target={'_blank'}><FaGithub /></a>
        </div>
      </div>
    </div>
  )
}

export default Info