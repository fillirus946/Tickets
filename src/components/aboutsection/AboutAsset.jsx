import React from 'react'
import st from '../../scss/AboutAsset.module.scss'

function AboutAsset({name, geocode, kmFrom, kmTo}) {
  
  return (
  <div className={st.aboutAsset}>
    <p className={st.aboutAsset__p}>Asset:</p>
    <div className={st.aboutAsset__wrapper}>
      <div className={st.aboutAsset__name}>
        <p>Name:</p>
        <div>{name}</div>
      </div>
      <div className={st.aboutAsset__geocode}>
        <p>Geocode:</p>
        <div>{geocode}</div>
      </div>
      <div className={st.aboutAsset__location}>
        <p>Location:</p>
          <div className={st.aboutAsset__locationkm}>
            <div>
            {kmFrom}
            </div>
            <div>
            {kmTo}
            </div>
          </div>
      </div>
    </div>

    </div>
  )
}

export default AboutAsset
