import React from 'react'
import st from '../../scss/SearchBox.module.scss'
function SearchBox() {
  return (
    <div className={st.searchbox}>
      <input className={st.searchboxinput} type="text" placeholder="&#8981;"/>
    </div>
  )
}

export default SearchBox
