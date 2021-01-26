import TicketsList from "./TicketsList";  
import React from 'react'
import st from '../../scss/listsection.module.scss'
import SearchBox from "./SearchBox";

function ListSection() {
  return (
    <div className={st.listsection}>
      <SearchBox/>
      <div className={st.listSectionlist}>
        <div className={st.title}>
          <div className={st.title__wrapper}>
            <p>owner</p>
            <p>reported</p>

            <p>asset</p>
            <p>status</p>
          </div>
        </div>
        <TicketsList/>
      </div>
    </div>
  )
}

export default ListSection
