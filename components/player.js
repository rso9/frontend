import React from 'react'

class Player extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <audio src={this.props.songUrl ? this.props.songUrl : "http://localhost:8080/song/x_files_x_files_theme.mp3"} controls autoPlay/>
      </div>
    )
  }
}

export default Player