import React from 'react'
import st from '../../scss/TicketList.module.scss'
import Ticket from "./Ticket";

function TicketsList() {
  return (
    <div className={st.ticketlist}>
      <Ticket/>
      <Ticket/>
      <Ticket/>
      <Ticket/>
      <Ticket/>
    </div>
  )
}

export default TicketsList
