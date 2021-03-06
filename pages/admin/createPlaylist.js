import React from 'react'
import Head from '../../components/head'
import axios from 'axios'
import path from 'path'

import {
  Container,
  Header,
  Form,
  Input,
  TextArea,
  Button,
  Select,
  Segment
} from 'semantic-ui-react'
import Axios from 'axios';

import getConfig from 'next/config'

const {
  publicRuntimeConfig: {CATALOG_API_URL}
} = getConfig()

class CreatePlaylist extends React.Component {

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  constructor(props) {
    super(props);

    this.state = {
      name: ''
    }
  }

  submitForm() {

    axios.post(CATALOG_API_URL + 'playlist', {
      playlistName: this.state.name,
    })
      .then(res => res.data)
      .then(response => alert(response.playlistName + ' has been created.'))
  }

  render() {
    return (
      <div>
        <Head title="RSOPlayer | Admin" />
        <Container>
          <Segment vertical>
            <Header as='h1'>Create playlist</Header>
            <Form>
              <Form.Group widths='equal'>
                <Form.Field
                  id='form-input-control-artist-name'
                  control={Input}
                  label='Playlist'
                  placeholder='Playlist name'
                  name='name'
                  onChange={this.handleChange}
                  value={this.state.name}
                />
              </Form.Group>
              <Form.Field
                id='form-button-control-public'
                control={Button}
                onClick={this.submitForm.bind(this)}
                content='Create'
              />
            </Form>
          </Segment>
        </Container>
      </div>
    )
  }
}

export default CreatePlaylist
