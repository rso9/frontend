import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'
import Player from '../components/player'
import { withRouter } from 'next/router'
import {
  Container,
  Segment,
  Card,
  Header,
  List
} from 'semantic-ui-react'

import getConfig from 'next/config'

const {
  publicRuntimeConfig: {CATALOG_API_URL, MEDIA_STORAGE_API_URL}
} = getConfig()

class Song extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      artists: ['Loading'],
      songName: 'Loading',
      songUrl: null,
      backgroundPictureURL: 'https://via.placeholder.com/500x500.png?text=rso9player%20has%20no%20image',
      artistDescription: 'No description found.'
    }
  }

  static async getInitialProps ({ query, res }) {
    const songId = query.id

    return { songId }
  }

  componentDidMount() {
    fetch(CATALOG_API_URL + 'song/' + this.props.songId)
      .then(res => res.json())
      .then(response => {
        const artists = response.artists.reduce((all, curr) => all + curr.name + ", ", "").slice(0, -2)
        const firstArtist = response.artists[0].name
        console.log(response)
        this.setState({
          artists: artists,
          songName: response.songName,
          songUrl: response.songUrl ? MEDIA_STORAGE_API_URL + response.songUrl : MEDIA_STORAGE_API_URL + 'song/x_files_x_files_theme.mp3'
        })
        return fetch('https://en.wikipedia.org/api/rest_v1/page/summary/' + firstArtist)
      })
      .then(res => res.json())
      .then(result => {
        if (result.type === 'standard') {
          this.setState({
            backgroundPictureURL: result.originalimage ? result.originalimage.source : this.state.backgroundPictureURL,
            artistDescription: result.extract ? result.extract : this.state.artistDescription
          })
        }
      })
  }

  render() {
    return (
      <div>  
        <Head title="RSOPlayer | Vedno si sanjala njega" />
        <Nav />
          <Container>
            <Segment vertical>
            <div className="song">
              <Card
                className='song-cover'
                image={this.state.backgroundPictureURL}
                color='pink'
              >
              </Card>
              <div className="song-info">
                <Header as='h1'>{this.state.songName}</Header>
                <Header as='h3'>{ this.state.artists }</Header>
                <p>
                  {this.state.artistDescription}
                </p>
              </div>
            </div>
            <Container>
              <Player songUrl={this.state.songUrl}/>
            </Container>
          </Segment>
        </Container>
        <style jsx>{
          `
            .song {
              display: flex;
            }
            .song-info {
              flex-grow: 3;
              margin-left: 20px;
            }
          `
        }</style>
      </div> 
    )
  }
}

export default Song
