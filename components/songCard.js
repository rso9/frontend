import React from 'react'
import Link from 'next/link'
import {
  Card,
  Icon
} from 'semantic-ui-react'


class SongCardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artistName: 'Iron Maiden', // TODO: when this is setup with AJAX change this to a placeholder
      songName: 'The Wicker Man', // TODO: when this is setup with AJAX change this to a placeholder
      backgroundPictureURL: 'https://via.placeholder.com/500x500.png?text=rso9player%20has%20no%20image',
      isLoaded: false,
      artistDescription: 'No description found.'
    }
  }

  getExtra() {
    return (
      <Link href={{ pathname: '/song', query: { id: this.props.id } }}><a><Icon name='caret square right' />Listen</a></Link>
    )
  }

  componentDidMount() {
    // TODO: sync this with catalog

    // fetch('catalog/songs/' + this.props.id)
    //   .then(res => res.json())
    //   .then(result => {
    //     this.setState({
    //       artistName: result.artist,
    //       songName: result.name
    //     })
    //   })

    fetch('https://en.wikipedia.org/api/rest_v1/page/summary/' + this.state.artistName)
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