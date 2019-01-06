import React from 'react'
import Head from '../../components/head'
import axios from 'axios'

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

import getConfig from 'next/config'

const {
  publicRuntimeConfig: {CATALOG_API_URL}
} = getConfig()

class CreateArtist extends React.Component {

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      firstName: '',
      lastName: ''
    }
  }

  submitForm() {
    axios.post(CATALOG_API_URL + 'artist', {
      name: this.state.name,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      artistName: this.state.name
    })
  }

  render() {
    return (
      <div>
        <Head title="RSOPlayer | Admin" />
        <Container>
          <Segment vertical>
            <Header as='h1'>Create artist</Header>
            <Form>
              <Form.Group widths='equal'>
                <Form.Field
                  id='form-input-control-artist-name'
                  control={Input}
                  label='Artist'
                  placeholder='Artist name'
                  name='name'
                  onChange={this.handleChange}
                  value={this.state.name}
                />
                <Form.Field
                  id='form-input-control-artist-firstName'
                  control={Input}
                  label='Artist first name'
                  placeholder='Artist first name'
                  name='firstName'
                  onChange={this.handleChange}
                  value={this.state.firstName}
                />
                <Form.Field
                  id='form-input-control-song-name'
                  control={Input}
                  label='Artist last name'
                  placeholder='Artist last name'
                  name='lastName'
                  onChange={this.handleChange}
                  value={this.state.lastName}
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

export default CreateArtist
