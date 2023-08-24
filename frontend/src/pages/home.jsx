/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */
import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import { Component } from 'react'
import { InView } from 'react-intersection-observer'
import { Link } from 'react-router-dom';
import {
  Button,
  Container, 
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'
import React from 'react';
import MyImage from '../assets/images/dragon3.png';
import headerBackground from '../assets/images/headerBackground.png';

function MyComponent() {
    return (
        <div>
            <img src={MyImage} alt="Description" />
        </div>
    );
}


const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      color='red'
      as='h1'
      content='Scales & Slumbers'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='“Draco Dormiens Nunquam Titillandus”.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button to="/shopping" as={Link} primary size='huge'>
      Get Started shopping
      <Icon name='right arrow' />
    </Button>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  toggleFixedMenu = (inView) => this.setState({ fixed: !inView })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (

      <Media greaterThan='mobile'>
        <InView onChange={this.toggleFixedMenu}>
          <Segment
            inverted
            textAlign='center'
            style={{ 
              minHeight: 700, 
              padding: '1em 0em',
              backgroundImage: `url(${headerBackground})`,
              backgroundSize: 'cover',                   
              backgroundPosition: 'center center' }}
            vertical
            >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
              >
              <Container>
                <Menu.Item as='a' active>
                  Home
                </Menu.Item>
                <Menu.Item as='a'>Shop</Menu.Item>
                <Menu.Item position='right'>
                
                  <Button to="/login" as={Link} inverted={!fixed}>
                    Log in
                  </Button>

                  
                  <Button as={Link} to="/signup" Component inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>

                  <Button className='cartbtn' as={Link} to="/cart" inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Your cart
                  </Button>

                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </InView>

        {children}
      </Media>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Media as={Sidebar.Pushable} at='mobile'>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='overlay'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as='a' active>
              Home
            </Menu.Item>
            <Menu.Item as='a'>Shop</Menu.Item>
            <Menu.Item as={Link} to="/login">Log in</Menu.Item>
            <Menu.Item as={Link} to="/signup">Sign Up</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Button as={Link} to="/login" inverted>
                      Log in
                    </Button>
                    <Button as={Link} to="/signup" inverted style={{ marginLeft: '0.5em' }}>
                      Sign Up
                    </Button>
                    <Button as={Link} to="/cart" inverted style={{ marginLeft: '0.5em' }}>
                      Your cart
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Beds For Fire Breathing Bestie!!
            </Header>
            <h2 style={{ fontSize: '1.33em' }}>🔥 Introducing Draconia Comfort! 🔥</h2>

<p>Do you have a majestic pet dragon at home?</p> 
<p>Or maybe a playful little drake that needs its own lounging space?</p> 
<p>Every dragon, no matter the size or breed, deserves a throne that befits its regal status!</p>

<ul>
    <li>🐉 Ultra-Resilient Material: Crafted to withstand the hottest dragon breath and the heaviest dragon scales.</li>
    <li>🌌 Magical Comfort: Infused with moonbeams and stardust to ensure a celestial sleep every time.</li>
    <li>🌿 Eco-Friendly: Sourced from the enchanted forests of Elvendale, these beds leave no magical carbon footprint.</li>
    <li>⭐ Fit for Every Dragon: From the tiniest wyvern to the most massive imperial dragon, we have the perfect size to ensure a snug fit!</li>
</ul>

<p>Gift your scaly friend the luxury they deserve. With Draconia Comfort, let them lounge like the royals of the sky they truly are. After all, isn't it about time your dragon slept on a cloud of dreams? 🌙🔮</p>

            <Header as='h3' style={{ fontSize: '2em' }}>
              We Make Beds That Keep Your Dragon Asleep!!
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            Customization avaiable!
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
          <Image src={MyImage} size='medium' rounded />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge'>Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              What a Company
            </Header>
            <p style={{ fontSize: '1.33em' }}>Friendly and reliable service</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              I shouldnt have gone with their competitor.
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          SATISFIED CUSTOMER
        </Header>
        <div style={{ fontSize: '1.33em' }}>
    <h2>Sir Cedric's Quest for Draco's Comfort</h2>

    <p>In the enchanting village of Whimsydale, Sir Cedric, a dragon enthusiast, had a peculiar dilemma. His beloved pet dragon, Draco, was growing at an astonishing rate, and his once-comfortable nest of gold and gems no longer seemed to offer the comfort it once did.</p>

    <p>Every night, Draco would twist and turn, occasionally letting out a puff of smoke in his sleep. Each morning, Cedric would find him sprawled out awkwardly, one wing hanging off the ledge of their tower, looking rather disgruntled.</p>

    <p>Determined to find a solution, Cedric set out on a quest to find the perfect sleep accessory for his scaly companion. He visited the mattress mages of Misty Mountains, known for crafting beds so comfortable that even elves couldn't resist them. But even their finest creation, woven from moonlight and dreams, was too soft for Draco's hefty frame.</p>

    <p>Next, he trekked to the hammock huts of Hanging Valleys. Their hammocks, suspended between giant trees and made of intertwined rainbows, were known to cradle giants into deep slumbers. But alas, even the sturdiest hammock sagged under Draco's weight.</p>

    <p>Despondent but not defeated, Cedric had an epiphany while watching Draco playfully try to catch fireflies one evening. He noticed the way the fireflies' glow seemed to form a net of stars in the night sky.</p>

    <p>Inspired, he worked with the finest craftsmen and magical beings of Whimsydale to create a majestic hammock. This masterpiece was woven from starlight, reinforced with the sturdiness of mountain roots, and imbued with a touch of Draco's own firefly-chasing magic.</p>

    <p>The night after the hammock was hung, Draco climbed onto it with a touch of skepticism. But as soon as he settled, his eyes grew heavy, and in minutes, he was snoring, curled up comfortably with fireflies twinkling around him.</p>

    <p>Sir Cedric watched with a satisfied smile, knowing that the bond between a dragon and his owner could overcome even the toughest of challenges. And so, under the soft glow of the stars, Draco found his perfect haven of rest, and Cedric discovered that the solution to the biggest problems often lay in the simplest joys.</p>
</div>

        <Button as='a' size='large'>
          Read More
        </Button>

        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'>Case Studies</a>
        </Divider>

        <Header as='h3' style={{ fontSize: '2em' }}>
          Did We Tell You About Our dragon sheets?
        </Header>
        <div style={{ fontSize: '1.33em' }}>
    <h2>Introducing: Draconis Dream Sheets!</h2>

    <h3>Unlock the Majesty of Nighttime with Draconis Dream Sheets!</h3>

    <p>In the realm of dragon comforts, few things rival the experience of wrapping up in our premium Draconis Dream Sheets. Designed with the mythical might and majesty of dragons in mind, these sheets promise to elevate nighttime to a realm of unparalleled coziness.</p>

    <h3>Key Quality Points:</h3>
    <ul>
        <li><strong>Scaled Comfort Technology:</strong> Just as dragons have scales to protect and comfort them, our sheets feature a unique pattern that mimics this design, providing a mix of softness and sturdiness.</li>

        <li><strong>Enchanted Temperature Regulation:</strong> Ever dealt with a dragon that breathes fire in its sleep? Our sheets are woven with magical fibers that adjust according to your dragon's body temperature, ensuring they remain cool during hot nights and warm during colder times.</li>

        <li><strong>Celestial Silk Blend:</strong> Draconis Dream Sheets are crafted from a blend of the finest celestial silks, sourced from the far corners of enchanted forests. This ensures a smooth texture that even the most sensitive dragon skins will find soothing.</li>

        <li><strong>Eco-friendly & Enchanting:</strong> Our sheets are not only kind to dragon skin but also to our planet. Sustainably sourced and created with a blend of natural and magical processes, they're the eco-friendly choice for the conscious dragon owner.</li>

        <li><strong>Majestic Aesthetics:</strong> Available in a range of ethereal colors, from Midnight Star to Dawn's Gold, our sheets complement any dragon's lair, adding a touch of elegance and luxury.</li>
    </ul>

    <p>Invest in the best for your legendary companion. Wrap them in the magic of Draconis Dream Sheets and watch them soar into the realm of dreams like never before. 🌌🐉🛌</p>
</div>

        <Button as='a' size='large'>
          I'm Still Quite Interested
        </Button>
      </Container>
    </Segment>

    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Religious Ceremonies</List.Item>
                <List.Item as='a'>Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Dragon Bed Pre-Order</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite Dragon Movie</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Save the Dragons
              </Header>
              <p>Help Save the Dragons and their homes!
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)

export default HomepageLayout
