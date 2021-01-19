# Module 5: Dungeon Offline
## Video Demo
https://www.youtube.com/watch?v=nCkT6MDTnR0&t=2s

Dungeon Offline is a tiled based RPG game made by React, Redux, Phaser 3, IonPhaser and Ruby on Rails. The goal of this project is to show how React and Phaser works with each other. To accomplish the goal, game logic is all done by Phaser 3 and all game UI is done by React.


## How to Install Dungeon Offline
1. Fork or clone the app and go to the app directory. Both Frontend and Backend are in the same directory.
2. CD to backend and run `bundle install`
3. Run command `rails db:migrate && rails db:seed` in the Backend.
4. Run `rails s` to stat the backend server. Usually, it will be at localhost:3000.
5. CD to frontend and run `npm install`.
6. Run `npm start`. Usually, it will be at localhost:8000

## About the App
Dungeon Offline is a full CRUD App.
* User need an account to Login.
* Here is one Username: `mfqmfq2`, Password: `123456`.
* User can create, edit and delete account.
* Users can create and delete Characters.

## About the Game
Dungeon Offline is a top-down tiled RPG game.
* Rails Backend is a server witch saves All user data and also will update the game in real time.
* Backend has some the information about the game world, such as Monsters, Characters data (User's) and Items.
* When Game start, Backend will provide all the information about to initialize the world.
* Every move of the character will be saved in real time.
* All different kinds of Monsters will respawn in a different location in a set of radius and also in different timer.
* All monster have a different set of items to drop. They also Randomized.
* Item have 4 tiers. T1: HP Potion(S) 50%. T2: HP Potion(L) 20%, T3: Attack Potion(L) 10%, and T4: Attack Potion(XL) 5%.
* The Random loot is add by the Backend to the Character for security reason.

## About Tiled
Game Map Editor.
* This is the Map editor for me. It give me a JSON file for Phaser 3 to Map all the tiles on the canvas.

## Developers
* Fanqiang Meng

## More About the App
The App uses the following Technology.
* React.js
* Redux.js
* Phaser3.js
* IonPhaser
* React Route
* Semantic-React and Semantic
* JWT
* Ruby on Rails
* Active Model Serializers
* JSON Server
* Bcrypt


### License
This project is licensed under the Learn.co Educational Content License. Please read `LICENSE.md` location in the directory or click on the following link (http://learn.co/content-license) for further details.
