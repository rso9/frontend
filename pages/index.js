import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'
import SongCard from '../components/songCard'
import {
  Container,
  Header,
  Segment,
  Card
} from 'semantic-ui-react'

const CATALOG_API_URL = 'http://35.204.191.75' // TODO: add ServiceDiscovery

class Home extends React.Component {

  render() {
    return (
      <div>
        <Head title="RSOPlayer | Welcome" />
        <Nav />
        <Container>
          <Segment vertical>
              <Header as='h1'>Hey there, Jaka!</Header>
              <p>
                We've found some great songs for you to check out while you have been away.
              </p>
    
              <Header as='h3'>Recommended</Header>
    
              <Container>
                <Card.Group itemsPerRow='4'>
                  <SongCard id={1}/>
                  <SongCard id={2}/>
                  <SongCard id={3} />
                  <SongCard id={4} />
                </Card.Group>
              </Container>
          </Segment>
        </Container>
        
      </div>
    )
  }
}

export default Home
