import React from 'react'
import Link from 'next/link'
import {
  Card,
  Icon
} from 'semantic-ui-react'

const CATALOG_API_URL = 'http://localhost:8080/v1/' // TODO: add ServiceDiscovery

class SongCardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artistName: 'Iron Maiden', // TODO: when this is setup with AJAX change this to a placeholder
      songName: 'The Wicker Man', // TODO: when this is setup with AJAX change this to a placeholder
      backgroundPictureURL: 'https://via.placeholder.com/500x500.png?text=rso9player%20has%20no%20image',
      isLoaded: false,
      artistDescription: 'No description found.',
      firstArtist: null
    }
  }

  getExtra() {
    return (
      <Link href={{ pathname: '/song', query: { id: this.props.id } }}><a><Icon name='caret square right' />Listen</a></Link>
    )
  }

  componentDidMount() {
    fetch(CATALOG_API_URL + 'song/' + this.props.id)
      .then(res => res.json())
      .then(result => {
        this.setState({
          artistName: result.artists.reduce((all, curr) => all + curr.name + ", ", "").slice(0, -2),
          firstArtist: result.artists[0].name,
          songName: result.songName
        })
        return fetch('https://en.wikipedia.org/api/rest_v1/page/summary/' + this.state.firstArtist)
      })
      .then(res => res.json())
      .then(result => {
        if (result.type === 'standard') {
          this.setState({
            backgroundPictureURL: result.originalimage ? result.originalimage.source : 'https://via.placeholder.com/500x500.png?text=rso9player%20has%20no%20image',
            artistDescription: result.extract ? result.extract : 'No description found.',
            isLoaded: true
          })
        }
      })
  }

  render() {
    return (
      <Card
        image={this.state.backgroundPictureURL}
        header={this.state.songName}
        meta={this.state.artistName}
        description={this.state.artistDescription}
        extra={this.getExtra()}
      >
      </Card>
    )
  }
}

export default SongCardComponent
