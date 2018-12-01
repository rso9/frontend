import React from 'react'
import Link from './link'

import { Container, Menu, Icon } from 'semantic-ui-react'

const Nav = () => (
  <Menu pointing secondary>
    <Container>
      <Link href="/">
        <Menu.Item as='a' header>
          RSOPlayer
        </Menu.Item>
      </Link>
      <Link href="/" activeClassName="active">
        <Menu.Item as='a'>
          Home
        </Menu.Item>
      </Link>
      <Link href="/browse" activeClassName="active">
        <Menu.Item as='a'>
          Browse
        </Menu.Item>
      </Link>
      <Link href="/account" activeClassName="active">
        <Menu.Item as='a'>
          Account
        </Menu.Item>
      </Link>
      <Menu.Menu position='right'>
        <Menu.Item>
          <Icon name='caret square right' size='large'></Icon>
          <Link href='/song'><a>Now playing: Vedno si sanjala njega (Fredi Miler)</a></Link>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
)

export default Nav
