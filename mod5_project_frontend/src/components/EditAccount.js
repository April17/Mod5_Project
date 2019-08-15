import React from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'
import {editAccount} from '../redux/adapters/currentUserAdapters'



class EditAccount extends React.Component{
  state = {
    id: this.props.user.id,
    name: '',
    password: '',
    password_confirmation: ''
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = () => {
    this.props.editAccount(this.state)
      // .then(data => {
      //   if (data.success) {
      //     console.log(data.success);
      //     this.props.history.push("/profile")
      //   }
      // })
      // .catch(error => {
      //   console.log(error);
      // })
  }

  render() {
    return(
      <Grid.Column textAlign='center'>
        <Form onSubmit={this.handleSubmit}>
          <Segment>
            <Form.Field>
              <Header as='h3'>{this.props.user.username}</Header>
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
            <Button color='green' type='submit'>Submit</Button>
          </Segment>
        </Form>
      </Grid.Column>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.currentUser
  }
}

const mapDispatchToProps = {
  editAccount: editAccount
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(EditAccount));
