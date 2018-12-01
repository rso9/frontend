import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'
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

const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

class Browse extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      firstName: 'Božo',
      lastName: 'Božičkov',
      gender: 'Male',
    }
  }

  render() {
    return (
      <div>
        <Head title="RSOPlayer | Welcome" />
        <Nav />
    
        <Container>
          <Segment vertical>
            <Header as='h1'>Edit your account settings</Header>
            <Form>
              <Form.Group widths='equal'>
                <Form.Field
                  id='form-input-control-first-name'
                  control={Input}
                  label='First name'
                  placeholder='First name'
                  value={this.state.firstName}
                />
                <Form.Field
                  id='form-input-control-last-name'
                  control={Input}
                  label='Last name'
                  placeholder='Last name'
                  value={this.state.lastName}
                />
                <Form.Field
                  control={Select}
                  options={genderOptions}
                  label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
                  placeholder='Gender'
                  defaultValue={this.state.gender}
                  search
                  searchInput={{ id: 'form-select-control-gender' }}
                />
              </Form.Group>
              <Form.Field
                id='form-textarea-control-opinion'
                control={TextArea}
                label='Your description'
                placeholder='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
              />
              <Form.Field
                id='form-button-control-public'
                control={Button}
                content='Confirm changes'
              />
            </Form>
          </Segment>
        </Container>
      </div>
    )
    
  }
} 
export default Browse
