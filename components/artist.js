import React from 'react'
import Link from 'next/link'
import {
  Card,
  Icon
} from 'semantic-ui-react'

const extra = (
  <a>
    <Icon name='caret square right' />
    <Link href="/song"><a>Listen</a></Link>
  </a>
)

const Artist = () => {
  return (
    <Card
      image='https://picsum.photos/400/400/?random'
      header='Fredi miler'
      meta='Clout gang'
      description='Koroški glasbenik je javnosti postal znan leta 2004 s skladbo Vedno si sanjala njega, ko se je videospot lastne produkcije zanjo razširil po slovenskem spletu.'
      extra={extra}
    >
    </Card>
  )
}

export default Artist