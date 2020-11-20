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
          <th>Result</th>
          <th>Notes</th>
          <th>TV</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
      </tbody>
    </Table>
            <Footer />
            </Container>
        )
    }

export default Events