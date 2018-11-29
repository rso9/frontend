import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'
import {
  Container,
  Header,
} from 'semantic-ui-react'

const Browse = () => (
  <div>
    <Head title="RSOPlayer | Welcome" />
    <Nav />

    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>Edit your account settings</Header>
      
    </Container>
  </div>
)

export default Browse
