import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'
import Artist from '../components/artist'
import {
  Container,
  Header,
  Segment,
  Card,
  Button,
  Input
} from 'semantic-ui-react'

export default class extends React.Component {

  

  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  search(e) {
    this.setState({query: e.target.value})
  }
  
  render() {
    return (
      <div>
        <Head title="RSOPlayer | Welcome" />
        <Nav />

        <Container>
          <Segment vertical>
              <Header as='h1'>Browse</Header>
              <p>
                Browse our huge library of songs.
              </p>

              <Input value={this.state.query} onChange={this.search.bind(this)} style={{marginBottom: 1 + 'em'}} fluid size='large' icon='search' placeholder='Search...' />
              <Header as='h3'>Results</Header>

              {
                this.state.query.length > 0 && 
                  <Container>
                    <Card.Group itemsPerRow='4'>
                      <Artist />
                      <Artist />
                      <Artist />
                      <Artist />
                    </Card.Group>
                  </Container>
              }

              {
                !(this.state.query.length > 0) && 
                  <Container>
                    <p>Oops. No results.</p>
                  </Container>
              }

          </Segment>
        </Container>
      </div>
    )
  }
}
