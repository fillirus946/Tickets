import React from 'react'
import st from '../../scss/AboutAsset.module.scss'

function AboutAsset({name, geocode, kmFrom, kmTo}) {
  
  return (
  <div className={st.aboutAsset}>
    <p className={st.aboutAsset__p}>Asset</p>
    <div className={st.aboutAsset__wrapper}>
      <div>
        <p>name</p>
        <div>{name}</div>
      </div>
      <div>
        <p>geocode</p>
        <div>{geocode}</div>
      </div>
      <div>
        <p>Location</p>
        <div>
        {kmFrom}
        </div>
        <div>
        {kmTo}
        </div>
      </div>
    </div>

    </div>
  )
}

export default AboutAsset
