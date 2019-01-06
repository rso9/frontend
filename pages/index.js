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

import getConfig from 'next/config'

const {
  publicRuntimeConfig: {CATALOG_API_URL}
} = getConfig()

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      songIds: []
    }
  }

  componentDidMount() {
    fetch(CATALOG_API_URL + 'song')
      .then(res => res.json())
      .then(response => {
        this.setState({
          songIds: response.map(e => e.id)
        })
      })
  }

  render() {
    const songCards = this.state.songIds.map(songId => 
      <SongCard id={songId} key={songId}></SongCard>
    )
    
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
                  { songCards }
                </Card.Group>
              </Container>
          </Segment>
        </Container>
        
      </div>
    )
  }
}

export default Home
