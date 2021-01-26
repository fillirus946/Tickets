import React from 'react'
import st from '../../scss/AboutAsset.module.scss'

function AboutAsset() {
  return (
    <div className={st.aboutAsset}>
     <p className={st.aboutAsset__p}>Asset</p>
     <div>
       <div>
         <p>name</p>
         <div>12</div>
       </div>
       <div>
         <p>geocode</p>
         <div>1231</div>
       </div>
       <div>
         <p>Asset</p>
         <div>
           123213
         </div>
       </div>
     </div>

    </div>
  )
}

export default AboutAsset
