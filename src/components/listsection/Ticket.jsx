import React from 'react'
import st from '../../scss/Ticket.module.scss'

function Ticket({asset, reportedTime, avatar, ticketId, getAndSendTicketId}) {

const ShowTicket=(id)=>{
  getAndSendTicketId(id)
}

  return (
    <div onClick={()=>ShowTicket(ticketId)} className={st.ticket}>
      <div className={st.ticket__wrapper}>
      <div className={st.ticket__imgWrapper}><img className={st.icon} src={avatar} alt=""/></div>
      <div className={st.ticket__info}>
        <p className={st.ticket__reported}>{reportedTime}</p>
        <p className={st.ticket__asset}>{asset}</p>
        <div className={st.ticket__status}>ASD</div>
      </div>
      </div>
    </div>
  )
}

export default Ticket
