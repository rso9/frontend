import React from 'react'

import getConfig from 'next/config'

class Player extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <audio src={this.props.songUrl} controls autoPlay/>
      </div>
    )
  }
}

export default Player
