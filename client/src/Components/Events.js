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
                <p>Note 2: Due to Covid restrictions, event meetups are also subject to change based on local health guidelines</p>
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
          <th scope="row">1</th>
          <td>11/20/2020</td>
          <td>Leicester City</td>
          <td>11:15</td>
          <td>NBC Sports Network</td>
          <td>No event-Covid restrictions</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>11/25/2020</td>
          <td>Atalanta</td>
          <td>12:00</td>
          <td>CBS Sports</td>
          <td>No event-weekday game</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>11/28/2020</td>
          <td>Brighton</td>
          <td>4:30</td>
          <td>NBC Sports Network</td>
          <td>No event-Covid restrictions</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>12/1/2020</td>
          <td>Ajax</td>
          <td>12:00</td>
          <td>CBS Sports Network</td>
          <td>No event-weekday game</td>
        </tr>
      </tbody>
    </Table>
            <Footer />
            </Container>
        )
    }

export default Events