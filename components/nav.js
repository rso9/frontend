import React from 'react'
import Link from './link'

import { withRouter } from 'next/router'
import { Container, Menu, Segment } from 'semantic-ui-react'

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
    </Container>
  </Menu>
)

export default Nav
