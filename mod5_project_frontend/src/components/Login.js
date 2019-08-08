import React from 'react'
import { Button, Form, Header, Segment } from 'semantic-ui-react'
import { connect } from "react-redux"

class Login extends React.Component {

  state = {
    username: "",
    password: "",
  }

  handelSubmit = (event) => {
    console.log(event.target);
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
      return (
        <div>
          <Header as='h2' color='teal' textAlign='center'>
               Log-in to your account
          </Header>
          <Form size='large' onSubmit={this.handelSubmit}>
            <Segment raised>
              <Form.Input
                fluid
                name="username"
                icon='user'
                iconPosition='left'
                placeholder='Username'
                onChange={this.handleChange}
              />
              <Form.Input
                  fluid
                  name="password"
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  onChange={this.handleChange}
              />
              <Button color='teal' fluid size='large'>
                  Login
              </Button>
            </Segment>
          </Form>
        </div>
      )
  }
}

const mapDispatchToProps = {
  getUserInfo: null
}

export default connect(
    null,
    mapDispatchToProps
  )(Login);
