
import st from './scss/app.module.scss'
import AboutSection from "./components/aboutsection/AboutSection";
import ListSection from './components/listsection/ListSection';
import React, { useState, useEffect } from 'react';
import axios from 'axios'



function App() {

  const [data, setData] = useState({ data: [] });
 
  useEffect(async () => {
    const result = await axios(
      'https://raw.githubusercontent.com/Tapify/public-code-test/master/web-ui-test/tickets.json',
    );
    let data = result.data
    setData(data);
    
    
  }, []);

console.log(data.length)

  return (
    <div className={st.app}>
    <div className={st.title}>Tickets</div>
    <div className={st.sections}>
      <div className = {st.listsection}>
      <ListSection data={data}/>
    
      </div>
      <AboutSection/>
    </div>
    </div>
  );
}

export default App;
