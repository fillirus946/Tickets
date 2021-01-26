import React from 'react'
import st from '../../scss/TicketList.module.scss'
import Ticket from "./Ticket";

function TicketsList(props) {

let data = props.data
console.log(data)
  const dataMapping=()=>(props.data.map((item)=><Ticket data={item.number}/>))
  console.log(props.data)
  return (
    <div className={st.ticketlist}>
      {dataMapping()}
    </div>
  )
}

export default TicketsList
