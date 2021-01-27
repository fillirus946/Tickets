import React from 'react'
import st from '../../scss/AboutOwners.module.scss'

function AboutOwners({avatar, firstName, lastName, specialities}) {
  return (
    <div className={st.aboutOwners}>
        <p className={st.aboutOwners__p}>Owners</p>
        <div className={st.aboutOwners__wrapper}>
        <div className={st.aboutOwners__imgWrapper}>
          <img className={st.icon} src={avatar} alt=""/>
        </div>
        <div>
        <p>{firstName} {lastName}</p>
        <div>{specialities ? specialities.map((item)=><p key=''>{item}</p>) : 'there are no any specialities'}</div>
        </div>
        
    </div>
  </div>
  )
}
export default AboutOwners
