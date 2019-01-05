import React from 'react'
import {
  Header,
  Card,
  Icon,
  List
} from 'semantic-ui-react'

const extra = (
  <a>
    <Icon name='caret square right' />
    Listen
  </a>
)

class SongComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      backgroundPictureURL: 'https://via.placeholder.com/500x500.png?text=rso9player%20has%20no%20image',
      isLoaded: false,
      artistDescription: 'No description found.'
    }
  }

  componentDidMount() {
    fetch('https://en.wikipedia.org/api/rest_v1/page/summary/' + this.props.artistName)
      .then(res => res.json())
      .then(result => {
        if (result.type === 'standard') {
          this.setState({
            backgroundPictureURL: result.originalimage ? result.originalimage.source : 'https://via.placeholder.com/500x500.png?text=rso9player%20has%20no%20image',
            artistDescription: result.extract ? result.extract : 'No description found.',
            isLoaded: true
          })
          console.log(this.state)
        }
      })
  }

  render() {
    return (
      <div className="song">
        <Card
          className='song-cover'
          image={this.state.backgroundPictureURL}
          color='pink'
        >
        </Card>
        <div className="song-info">
          <Header as='h1'>{this.props.songName}</Header>
          <Header as='h3'>{this.props.artistName}</Header>
          <p>
            {this.state.artistDescription}
          </p>

        </div>

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

export default SongComponent