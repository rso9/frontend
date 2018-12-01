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
  }

  render() {
    return (
      <div className="song">
        <Card
          className='song-cover'
          image='https://picsum.photos/400/400/?random'
          color='pink'
        >
        </Card>
        <div className="song-info">
          <Header as='h1'>Vedno si sanjala njéga</Header>
          <p>
            Fredi Miler
          </p>

          <Header as='h4'>More from Fredi Miler:</Header>

          <List divided relaxed>
            <List.Item>
              <List.Icon name='caret square right' size='large' verticalAlign='middle' />
              <List.Content>
                <List.Header as='a'>Nategnem še tvojo!</List.Header>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='caret square right' size='large' verticalAlign='middle' />
              <List.Content>
                <List.Header as='a'>SRNICA</List.Header>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='caret square right' size='large' verticalAlign='middle' />
              <List.Content>
                <List.Header as='a'>Naredi da mi pride</List.Header>
              </List.Content>
            </List.Item>
          </List>
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