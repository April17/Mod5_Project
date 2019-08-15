import React from 'react'
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import { connect } from "react-redux"
import '../assets/style/CharacterCreation.css'


class CharacterCreation extends React.Component{
  state = {
    name: '',
    max_hp: 1000,
    atk: 100,
    def: 200,
    points: 10
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleHpChange = (event) => {
    if (event.currentTarget.name === "plus" && this.state.points > 0) {
      this.setState({max_hp: this.state.max_hp + 100, points: this.state.points - 1})
    } else if (event.currentTarget.name === "minus" && this.state.max_hp > 1000){
      this.setState({max_hp: this.state.max_hp - 100, points: this.state.points + 1})
    }
  }

  handleAtkChange = (event) => {
    if (event.currentTarget.name === "plus" && this.state.points > 0) {
      this.setState({atk: this.state.atk + 10, points: this.state.points - 1})
    } else if (event.currentTarget.name === "minus" && this.state.atk > 100){
      this.setState({atk: this.state.atk - 10, points: this.state.points + 1})
    }
  }

  handleDefChange = (event) => {
    if (event.currentTarget.name === "plus" && this.state.points > 0) {
      this.setState({def: this.state.def + 20, points: this.state.points - 1})
    } else if (event.currentTarget.name === "minus" && this.state.def > 200){
      this.setState({def: this.state.def - 20, points: this.state.points + 1})
    }
  }

  handleSubmit = () => {
    // this.props.signUp(this.state)
    // .then(data => {
    //   if (data.success) {
    //     console.log(data.success);
    //     this.props.history.push("/")
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
              <Grid columns={3} textAlign='center'>
                <Grid.Column textAlign='center'>
                  <input name="name" onChange={this.handleChange} value={this.state.name} placeholder='Character Name' />
                </Grid.Column>
              </Grid>
            </Form.Field>
            <Grid columns={3} textAlign='center'>
              <Grid.Column textAlign='center'>
                Total Points: {this.state.points}
              </Grid.Column>
            </Grid>
            <Form.Field>
              <Grid columns={3}>
                <Grid.Column textAlign='right'>
                  <Button name="minus" icon='minus' onClick={this.handleHpChange}/>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                  <input name="max_hp" onChange={this.handleChange} value={this.state.max_hp} readOnly />
                </Grid.Column>
                <Grid.Column textAlign='left'>
                  <Button name="plus" icon='plus' onClick={this.handleHpChange}/>
                </Grid.Column>
              </Grid>
            </Form.Field>
            <Form.Field>
              <Grid columns={3}>
                <Grid.Column textAlign='right'>
                  <Button name="minus" icon='minus' onClick={this.handleAtkChange}/>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                  <input name="atk" onChange={this.handleChange} value={this.state.atk} readOnly />
                </Grid.Column>
                <Grid.Column textAlign='left'>
                  <Button name="plus" icon='plus' onClick={this.handleAtkChange}/>
                </Grid.Column>
              </Grid>
            </Form.Field>
            <Form.Field>
              <Grid columns={3}>
                <Grid.Column textAlign='right'>
                  <Button name="minus" icon='minus' onClick={this.handleDefChange}/>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                  <input name="def" onChange={this.handleChange} value={this.state.def} readOnly />
                </Grid.Column>
                <Grid.Column textAlign='left'>
                  <Button name="plus" icon='plus' onClick={this.handleDefChange}/>
                </Grid.Column>
              </Grid>
            </Form.Field>
            <Button color='green' type='submit'>Create</Button>
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
  createCharacter: null
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CharacterCreation);
