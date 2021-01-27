import React from 'react'
import st from '../../scss/TicketList.module.scss'
import Ticket from "./Ticket";

function TicketsList({data, getAndSendTicketId}) {


  const dataMapping=()=>(data.map((item)=><Ticket asset={item.asset.name} reportedTime={item.reportedTime} avatar={item.owner.avatar} ticketId={item.ticketId} key={item.ticketId} getAndSendTicketId={getAndSendTicketId}/>))
  return (
    <div className={st.ticketlist}>
      {dataMapping()}
    </div>
  )
}

export default TicketsList
