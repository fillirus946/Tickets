import React from 'react'
import st from '../../scss/AboutDetails.module.scss'

function AboutDetails({reported, status, description}) {
  return (
    <div className={st.aboutDetails}>
      <p className={st.aboutDetails__p}>Details</p>
      <div className={st.aboutDetails__wrapper}>
        <div>
          <p>Reported</p>
          <p>{reported}</p>
        </div>
        <div>
          <p>Status</p>
          <p>{status}</p>
        </div>
        <div>
          <p>Description</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default AboutDetails
