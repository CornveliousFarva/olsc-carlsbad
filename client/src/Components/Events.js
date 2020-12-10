import React from 'react'
import { Container,
Table } from 'reactstrap'
import Footer from './footer'

    function Events(){
        return(
            <Container fluid>
              <div className="events-container">
                <h1>Upcoming Games and Events</h1>
                <p>Note 1: Game times are subject to change and are listed in Pacific Time.</p>
                <p>Note 2: Due to Covid restrictions, event meetups are also subject to change based on local health guidelines. Even though there may or may not be events, please try and support Grubby's during these trying times.</p>
            </div> 
            <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Opponent</th>
          <th>Match Time</th>
          <th>TV</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">4</th>
          <td>12/13/2020</td>
          <td>Fulham</td>
          <td>8:30</td>
          <td>NBC Sports Network</td>
          <td>No event-COVID restrictions</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>12/16/2020</td>
          <td>Tottenham Hotspur</td>
          <td>12:00</td>
          <td>NBC Sports Network</td>
          <td>No event-weekday game</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>12/19/2020</td>
          <td>Crystal Palace</td>
          <td>4:30</td>
          <td>NBC Sports Network</td>
          <td>No event-COVID restrictions</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>12/27/2020</td>
          <td>West Brom</td>
          <td>8:30</td>
          <td>NBC Sports Network</td>
          <td>No event-COVID restrictions</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>12/30/2020</td>
          <td>Newcastle United</td>
          <td>12:00</td>
          <td>NBC Sports Network</td>
          <td>No event-COVID restrictions</td>
        </tr>
      </tbody>
    </Table>
    <Footer />
            </Container>
        )
  }

export default Events