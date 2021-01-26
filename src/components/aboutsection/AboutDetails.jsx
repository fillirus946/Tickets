import React from 'react'
import st from '../../scss/AboutDetails.module.scss'

function AboutDetails() {
  return (
    <div className={st.aboutDetails}>
      <p className={st.aboutDetails__p}>Details</p>
      <div>
        <div>
          <p>Reported</p>
          <p>123123</p>
        </div>
        <div>
          <p>Status</p>
          <p>123123</p>
        </div>
        <div>
          <p>Description</p>
          <p>123123</p>
        </div>
      </div>
    </div>
  )
}

export default AboutDetails
