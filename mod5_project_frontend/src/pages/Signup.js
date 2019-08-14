import React from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import { connect } from "react-redux"
import { signUp } from '../redux/adapters/currentUserAdapters'


class Signup extends React.Component{
  state = {
    username: '',
    password: '',
    confirmPassword: ''
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = () => {
    this.props.signUp(this.state)
    .then(data => {
      if (data.success) {
        console.log(data.success);
        this.props.history.push("/")
      }
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    return(
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='black' textAlign='center'>
                 Sign Up
            </Header>
            <Form onSubmit={this.handleSubmit}>
              <Segment raised>
                <Form.Field>
                  Dungeon Online
                </Form.Field>
                <Form.Field>
                  <input name="username" onChange={this.handleChange} placeholder='Username' />
                </Form.Field>
                <Form.Field>
                  <input name="name" onChange={this.handleChange} placeholder='Display Name' />
                </Form.Field>
                <Form.Field>
                  <input type="password" name="password" onChange={this.handleChange} placeholder='Password' />
                </Form.Field>
                <Form.Field>
                  <input type="password" name="password_confirmation" onChange={this.handleChange} placeholder='Confirm Password' />
                </Form.Field>
                <Button type='submit'>Submit</Button>
              </Segment>
            </Form>
          </Grid.Column>
      </Grid>
    )
  }


}

const mapDispatchToProps = {
  signUp: signUp
}

export default connect(
    null,
    mapDispatchToProps
  )(Signup);
