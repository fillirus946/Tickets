import React from 'react'
import st from '../../scss/AboutOwners.module.scss'
import profileIcon from "../../icon/profileicon.webp";

function AboutOwners() {
  return (
    <div className={st.aboutOwners}>
     <p className={st.aboutOwners__p}>Owners</p>
     <div className={st.aboutOwners__imgWrapper}>
      <img className={st.icon} src={profileIcon} alt=""/>
     </div>
     <p>Clark Clark</p>
     <p>Electrician</p>
    </div>
  )
}

export default AboutOwners
