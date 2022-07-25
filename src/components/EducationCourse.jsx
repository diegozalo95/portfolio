import React from 'react'

const EducationCourse = ({ course }) => {
  return (
    <div className='education__courses-item'>
      <p className='education__courses-text'>{ course }</p>
    </div>
  )
}

export default EducationCourse