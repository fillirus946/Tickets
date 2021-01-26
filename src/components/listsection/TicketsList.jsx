import React from 'react'
import st from '../../scss/TicketList.module.scss'
import Ticket from "./Ticket";

function TicketsList(props) {
let data = props.data

  return (
    <div className={st.ticketlist}>
      <Ticket/>
    </div>
  )
}

export default TicketsList
