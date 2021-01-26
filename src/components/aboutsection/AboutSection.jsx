import React from 'react'
import st from '../../scss/AboutSection.module.scss'
import AboutAsset from './AboutAsset'
import AboutDetails from './AboutDetails'
import AboutOwners from './AboutOwners'

function AboutSection() {
  return (
    <div className={st.aboutSection}>
      <div className={st.aboutWrapper}>
        <AboutOwners/>
        <AboutDetails/>
        <AboutAsset/>
      </div>
    </div>
  )
}

export default AboutSection
