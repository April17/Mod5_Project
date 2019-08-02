import React, { Component } from 'react'
import './App.css';
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react'

class App extends Component {

  state = {
    initialize: false,
    game: {
      width: "100%",
      height: "100%",
      type: Phaser.AUTO,
      scene: {
        init: function() {
          this.cameras.main.setBackgroundColor('#000000')
        },
        create: function() {
          console.log("create", this);
            this.helloWorld = this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            "Hello World", {
              font: "40px Arial",
              fill: "#ffffff"
            }
          );
          this.helloWorld.setOrigin(0.5);
        },
        update: function() {
          this.helloWorld.angle += 1;
        }
      }
    }
  }

  initializeGame = () => {
    const { game } = this.state
    // this.ionPhaser.game = game
    this.setState({ initialize: true })

    setTimeout(() => {
      console.log(game.instance)
    }, 3000)
  }

  render() {
    const { initialize, game } = this.state
    return (
      <div className="App">
        <header className="App-header">
          { !initialize &&
            <React.Fragment>
              <div onClick={this.initializeGame} className="flex">
                <a href="#1" className="bttn">Initialize</a>
              </div>
            </React.Fragment>
          }
          <IonPhaser game={game} initialize={initialize} />
        </header>
      </div>
    );
  }
}

export default App;
