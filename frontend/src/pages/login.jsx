
import { Button, Form, Segment } from 'semantic-ui-react'

const Loginform = () => (
  <Segment inverted>
    <Form inverted>
      <Form.Group widths='equal'>
        <Form.Input fluid label='full name/email' placeholder='Full name/email' />
        <Form.Input fluid label='password' placeholder='password' />
      </Form.Group> 
      <Button type='submit'>Submit</Button>
    </Form>
  </Segment>
)
export default Loginform