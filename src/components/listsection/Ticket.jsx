import React from 'react'
import st from '../../scss/Ticket.module.scss'
import profileIcon from "../../icon/profileicon.webp";

function Ticket(props) {
  
  return (
    <div className={st.ticket}>
      <div className={st.ticket__wrapper}>
      <div className={st.ticket__imgWrapper}><img className={st.icon} src={profileIcon} alt=""/></div>
      <div className={st.ticket__info}>
        <p className={st.ticket__reported}>25/07/12 19:54</p>
        <p className={st.ticket__asset}>asset</p>
        <div className={st.ticket__status}>ASD</div>
        
      </div>
      </div>
    </div>
  )
}

export default Ticket
