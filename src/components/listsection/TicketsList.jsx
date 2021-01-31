import React, {useContext}  from 'react'
import st from '../../scss/TicketList.module.scss'
import Ticket from "./Ticket";
import {Context} from '../context'


function TicketsList() {

const {data} = useContext(Context)

  const dataMapping=()=>(data.map((item)=><Ticket 
                                              asset={item.asset.name}
                                              reportedTime={item.reportedTime}
                                              avatar={item.owner.avatar}
                                              ticketId={item.ticketId}
                                              key={item.ticketId}
                                              />))
  return (
    <div className={st.ticketlist}>
      {dataMapping()}
    </div>
  )
}

export default TicketsList
