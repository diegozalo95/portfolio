import React from 'react'
import '../styles/Skills.scss'
import SkillsItem from './SkillsItem'
import { FaHtml5, FaJsSquare, FaCss3Alt, FaSass, FaReact, FaAngular, FaGitAlt, FaLaptop } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";


const Skills = () => {
  return (
    <div className='skills'>
      <div className='skills__container'>
        <h3 className='skills__title'>Conocimientos</h3>
        <div className='skills__list'>
          <SkillsItem name='HTML' logo={<FaHtml5 />} color='#dc4a25' />
          <SkillsItem name='JavaScript' logo={<FaJsSquare />} color='#efd91b' />
          <SkillsItem name='CSS' logo={<FaCss3Alt />} color='#2391eb' />
          <SkillsItem name='SASS' logo={<FaSass />} color='#cf6a9e' />
          <SkillsItem name='React' logo={<FaReact/>} color='#5fd2f2' />
          <SkillsItem name='JQuery' logo={<DiJqueryLogo />} color='#0965a6' />
          <SkillsItem name='Git' logo={<FaGitAlt />} color='#e84f31' />
          <SkillsItem name='Diseño' logo={<FaLaptop />} color='#00a0e0' />
        </div>
      </div>
    </div>
  )
}

export default Skills