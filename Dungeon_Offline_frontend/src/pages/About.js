import React from 'react'
import { Header, Image, Divider, Grid, Segment, Message } from 'semantic-ui-react'
import { withRouter, Link } from 'react-router-dom'
// import xiaoLaJi2 from '../assets/active_resources/xiaolaji.gif'



class About extends React.Component {

  componentDidMount(){
    const that = this
    // setTimeout(function(){
    //   that.props.history.push("/")
    // }, 3000)
  }

  render() {
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Segment className="transparent">
          <Message className="transparent">
            <Grid.Column style={{ maxWidth: 450 }}>
              <Segment className="frostglass">
                <Header className="textColor" as='h1' textAlign='center' >About Project</Header>
                <Header className="textColor" as='h3' textAlign='left' >This project is made mainly by React, Phaser 3 and IonPhaser. Redus made my life easier in this project. If you notice, this game save your data in real time and there are many more.</Header>
                <Divider className="textColor" horizontal>EMMMMM</Divider>
                <Header className="textColor" as='h1' textAlign='center' >About Me</Header>
                <Header className="textColor" as='h2' textAlign='center' >April17</Header>
                <Header className="textColor" as='h3' textAlign='left' >Well, that is my GitHub name. I am Fanqiang Meng. I crate this project and hope you find it fun.</Header>
                <Header className="textColor" as='h3' textAlign='left' >April17</Header>
              </Segment>
            </Grid.Column>
          </Message>
        </Segment>
      </Grid>
    )
  }
}

export default withRouter(About)
