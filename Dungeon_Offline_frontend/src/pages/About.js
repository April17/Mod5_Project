import React from 'react'
import { Header, Divider, Grid, Segment } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'



class About extends React.Component {

  render() {
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
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
      </Grid>
    )
  }
}

export default withRouter(About)
