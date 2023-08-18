/* eslint-disable no-unused-vars */
import React from 'react'
import { Form, Segment } from 'semantic-ui-react'

const SignupForm = () => (
  <Segment inverted>
  <Form inverted>
    <Form.Input
      error={{ content: 'Please enter your full name', pointing: 'below' }}
      fluid
      label='Full name'
      placeholder='Full name'
      id='form-input-first-name'
    />
 
     <Form.Input
      error='Please enter your email'
      fluid
      label='email'
      placeholder='email'
    />
    <Form.Input
      error='Please enter a password'
      fluid
      label='password'
      placeholder='password'
    />
    <Form.Checkbox
      label='I agree to the Terms and Conditions'
      error={{
      content: 'You must agree to the terms and conditions',
      pointing: 'left',
      }}
      />
  </Form>
  </Segment>
)

export default SignupForm