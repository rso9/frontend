import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'
import Player from '../components/player'
import SongComponent from '../components/song'
import {
  Container,
  Segment,
} from 'semantic-ui-react'

class Song extends React.Component {

  render() {
    return (
      <div>  
        <Head title="RSOPlayer | Vedno si sanjala njega" />
        <Nav />
        <Container>
          <Segment vertical>
              
              <SongComponent />
    
              <Container>
                <Player className="music-player" artist="Fredi Miler" name="Vedno si sanjala njega"/>
              </Container>
          </Segment>
        </Container>
      </div>
    )
  }
}

export default Song