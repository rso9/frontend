import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import Artist from '../components/artist'
import {
  Container,
  Header,
  Segment,
  Card
} from 'semantic-ui-react'

const Home = () => (
  <div>
    <Head title="RSOPlayer | Welcome" />
    <Nav />
    <Container>
      <Segment vertical>
          <Header as='h1'>Hey there, Jaka!</Header>
          <p>
            We've found some great artist for you to check out while you have been away.
          </p>

          <Header as='h3'>Recommended</Header>

          <Container>
            <Card.Group itemsPerRow='4'>
              <Artist />
              <Artist />
              <Artist />
              <Artist />
            </Card.Group>
          </Container>
      </Segment>
    </Container>
    
  </div>
)

export default Home
