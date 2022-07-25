import React from 'react'
import { MdMailOutline } from 'react-icons/md';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import '../styles/Contact.scss'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact__container'>
        <h3 className='contact__title'>Contacto</h3>
        <div className='contact__list'>
          <div className='contact__item'>
            <a href='mailto:diegozalo57@gmail.com'
              className='contact__link'
              target={'_blank'}><MdMailOutline /></a>
            </div>
          <div className='contact__item'>
            <a href='https://www.linkedin.com/in/diego-zapata-lopez-757943190/'
              className='contact__link'
              target={'_blank'}><FaLinkedin /></a>
          </div>
          <div className='contact__item'>
            <a href='https://www.instagram.com/diegozalo95_/?hl=es-la'
              className='contact__link'
              target={'_blank'}><FaInstagram /></a>
          </div>
          <div className='contact__item'>
            <a href='https://github.com/diegozalo95'
              className='contact__link'
              target={'_blank'}><FaGithub /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact