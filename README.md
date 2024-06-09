# Magical Arena

This project simulates a battle between two players in a magical arena. Players take turns attacking and defending until one player's health reaches 0.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [Rules of the Game](#rules-of-the-game)

## Installation

1. Clone the repository:

git clone <repository-url>
cd MagicalArena
Install dependencies:

npm install
Usage
To run the main script:

node main.js
You should see the output of the battle in the console.

Testing
To run the tests:

npx mocha
This will run the unit tests defined in the test directory.

Project Structure

MagicalArena/
├── Arena.js          # Arena class to manage the battle logic
├── Dice.js           # Dice class to simulate a six-sided die roll
├── Player.js         # Player class with health, strength, and attack attributes
├── main.js           # Main script to initialize players and start the battle
├── README.md         # This README file
├── package.json      # Project dependencies and scripts
└── test
    └── player.test.js # Unit tests for the Player class

Rules of the Game

Player Attributes:

Each player has three attributes: health, strength, and attack, all of which are positive integers.
A player dies if their health reaches 0.
Battle Mechanics:

Any two players can fight a match in the arena.
Players attack in turns. The player with the lower health attacks first at the start of the match.
The attacking player rolls an attacking die, and the defending player rolls a defending die.
The attack value multiplied by the outcome of the attacking die roll is the damage created by the attacker.
The defender's strength value multiplied by the outcome of the defending die roll is the damage defended by the defender.
Any damage created by the attacker that exceeds the damage defended by the defender will reduce the defender's health.
The game ends when any player's health reaches 0.
Example
Here's an example of how a battle might proceed:

Player A: 50 health, 5 strength, 10 attack
Player B: 100 health, 10 strength, 5 attack
Player A attacks and rolls a 5. Player B defends and rolls a 2.

Attack damage: 5 * 10 = 50
Defending strength: 10 * 2 = 20
Player B's health is reduced by 30 to 70.
Player B attacks and rolls a 4. Player A defends and rolls a 3.

Attack damage: 4 * 5 = 20
Defending strength: 5 * 3 = 15
Player A's health is reduced by 5 to 45.