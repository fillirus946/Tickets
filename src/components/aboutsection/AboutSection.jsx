
import st from '../../scss/AboutSection.module.scss'
import AboutAsset from './AboutAsset'
import AboutDetails from './AboutDetails'
import AboutOwners from './AboutOwners'
import {useContext} from 'react'
import { Context } from '../context'

function AboutSection() {

  const {ticket} = useContext(Context)
  console.log(ticket)
  if(ticket){
    return(
      <div className={st.aboutSection}>
        <div className={st.aboutWrapper}>
              <div className={st.ticketNumber}>ticket NO.:{ticket.number}</div>
                <AboutOwners avatar={ticket.owner.avatar} firstName={ticket.owner.firstName} lastName={ticket.owner.lastName} specialities={ticket.owner.specialities}/>
                <AboutDetails reported={ticket.reportedTime} status={ticket.status} description={ticket.description}/>
                <AboutAsset name={ticket.asset.name} geocode={ticket.asset.geoCode} kmFrom={ticket.asset.kmFrom} kmTo={ticket.asset.kmTo}/>
              </div>
            </div>
      )
  }else{
    return(<div className={st.aboutSection}>
      <div className={st.aboutWrapper}>
        no choosen cards here
      </div>
    </div>
    )
  }
}

export default AboutSection
