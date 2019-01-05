import React from 'react'
import Head from '../../components/head'

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

const CATALOG_API_URL = 'http://localhost:8080/v1/' // TODO: add ServiceDiscovery

class CreateSong extends React.Component {

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleselectedFile = event => {
    this.setState({
      file: event.target.files[0]
    })
  }

  constructor(props) {
    super(props);

    this.state = {
      artist: '',
      title: '',
      artists: [],
      file: null
    }
  }

  componentDidMount() {
    fetch(CATALOG_API_URL + 'artist')
      .then(res => res.json())
      .then(response => {

        const artistDropdownObjects = response.map(e => {
          return {
            key: e.id,
            text: e.name,
            value: e.id
          }
        })

        this.setState({
          artists: artistDropdownObjects
        })
      })
  }

  submitForm() {
    let formData = new FormData();
    formData.append('artist', this.state.artist);
    formData.append('title', this.state.title);
    formData.append('song', this.state.file);

    fetch('http://localhost:1234/song', {
      method: 'post',
      body: formData,
    })
    .then((res) => {
      console.log(res)
    });
  }

  render() {
    return (
      <div>
        <Head title="RSOPlayer | Admin" />
        <Container>
          <Segment vertical>
            <Header as='h1'>Upload song</Header>
            <Form>
              <Form.Group widths='equal'>
                { this.state.artists && <Form.Field control={Select} label='Artist' name='artist' options={this.state.artists} placeholder='Select artist' onChange={this.handleChange}/> }
                <Form.Field
                  id='form-input-control-song-name'
                  control={Input}
                  label='Song'
                  placeholder='Song name'
                  name='title'
                  onChange={this.handleChange}
                  value={this.state.title}
                />
                <input type="file" id="file" name="file" onChange={this.handleselectedFile}/>
              </Form.Group>
              <Form.Field
                id='form-button-control-public'
                control={Button}
                onClick={this.submitForm.bind(this)}
                content='Upload'
              />
            </Form>
          </Segment>
        </Container>
      </div>
    )
  }
}

export default CreateSong
