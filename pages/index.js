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

const CATALOG_API_URL = 'http://35.204.191.75' // TODO: add ServiceDiscovery

class Home extends React.Component {


  /***************** Example: how to fetch an API and get data *****************/ 

  // async fetchUsers() {
  //   const artists = await fetch('http://35.204.191.75/users')
  //   console.log(await artists.json())
  // }

  // componentDidMount() {
  //   this.fetchUsers()
  // }

  render() {
    return (
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
  }
}

export default Home
