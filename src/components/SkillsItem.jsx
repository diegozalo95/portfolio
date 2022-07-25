import React from 'react'

const SkillsItem = ({ name, logo, color }) => {
  const colorStyle = {
    color: color
  }

  return (
    <div className='skills__item'>
      <div className="skills__logo" style={ colorStyle }>{logo}</div>
      <p className='skills__name'>{name}</p>
    </div>
  )

}

export default SkillsItem