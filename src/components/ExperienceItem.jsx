import React from 'react'

const ExperienceItem = ({ date, company, description }) => {
  return (
    <div className='experience__item'>
      <p className='experience__time'>{date}</p>
      <p className='experience__company'>{company}</p>
      <p className='experience__text'>{description}</p>
    </div>
  )
}

export default ExperienceItem