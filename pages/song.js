import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'
import Player from '../components/player'
import SongComponent from '../components/song'
import { withRouter } from 'next/router'
import {
  Container,
  Segment,
} from 'semantic-ui-react'

class Song extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      artistName: 'Iron Maiden',
      songName: 'The Wicker Man'
    }
  }

  static async getInitialProps ({ query, res }) {
    const songId = query.id
    return { songId }
  }

  componentDidMount() {
    const catalogUrl = 'catalog'
    fetch(catalogUrl + '/songs/' + this.props.songId)
      .then(res => res.json())
      .then(response => {
        this.setState({
          artistName: response.artist,
          songName: response.name,
          songUrl: response.url
        })
      })
  }

  render() {
    return (
      <div>  
        <Head title="RSOPlayer | Vedno si sanjala njega" />
        <Nav />
        <Container>
          <Segment vertical>
              <SongComponent songName={this.state.songName} artistName={this.state.artistName}/>
              <Container>
                <Player songUrl={this.state.songUrl}/>
              </Container>
          </Segment>
        </Container>
      </div>
    )
  }
}

export default Song