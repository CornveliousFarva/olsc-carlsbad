import React from 'react'
import { Container } from 'reactstrap'
import Footer from './footer'

    function Events(){
        return(
            <Container fluid>
              <div className="events-container">
                <h1>Upcoming Games and Events</h1>
                <p>Note 1: Game times are subject to change.</p>
                <p>Note 2: Due to Covid restrictions, event meetups are also subject to change based on local health guidelines</p>
            </div>  
            <Footer />
            </Container>
        )
    }

export default Events