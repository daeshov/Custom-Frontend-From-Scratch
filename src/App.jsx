import { Header, Segment } from 'semantic-ui-react'

const HeaderExampleInverted = () => (
  <Segment inverted >
    <Header inverted textAlign='center' as='h1' color='red'>
    scalesandslumbers 
    </Header>
    <button>
      Home
    </button>
    <button>
      shop
    </button>
    <button>
      login
    </button>
  </Segment>
)
export default HeaderExampleInverted