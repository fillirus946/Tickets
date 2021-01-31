
import st from './scss/app.module.scss'
import AboutSection from "./components/aboutsection/AboutSection";
import ListSection from './components/listsection/ListSection';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {Context} from './components/context'


function App() {

  const [data, setData] = useState([]);
  const [ticket, setTicket] = useState(0)

useEffect( () => {
  const getData= async ()=>{
      const result = await axios(
        'https://raw.githubusercontent.com/Tapify/public-code-test/master/web-ui-test/tickets.json',
      );
      let data = await result.data
      setData(data);
    }
    getData()
  }, []);

  const getAndSendTicketId=(id)=>{
        data.filter((item)=>filterAndSetTicket(id, item))
  } 
  const filterAndSetTicket=(id, item)=>{
    if(item.ticketId === id){
      setTicket(item)
    }
  }

  return (
    <Context.Provider value={{getAndSendTicketId, data, ticket}}>
      <div className={st.app}>
        <div className={st.sections}>
        <div className={st.title}>Tickets</div>
        <div className={st.wrapper}>
          <div className = {st.listsection}>
          <ListSection/>
          </div>
          <AboutSection/>
        </div>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
