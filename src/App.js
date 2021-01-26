
import st from './scss/app.module.scss'
import AboutSection from "./components/aboutsection/AboutSection";
import ListSection from './components/listsection/ListSection';
import React, { useState, useEffect } from 'react';


function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/Tapify/public-code-test/master/web-ui-test/tickets.json")
      .then(res => res.json())
      .then(
        (result) => {
          // setIsLoaded(true);
          // setItems(result);
          console.log(result)
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  return (
    <div className={st.app}>
    <div className={st.title}>Tickets</div>
    <div className={st.sections}>
      <div className = {st.listsection}>
      <ListSection/>
      </div>
      <AboutSection/>
    </div>
    </div>
  );
}

export default App;
