const Player = require('./Player');
const Dice = require('./Dice');

class Arena {
    constructor(playerA, playerB) {
        this.playerA = playerA;
        this.playerB = playerB;
        this.dice = new Dice();
    }

    startBattle() {
        let attacker = this.playerA.getHealth() <= this.playerB.getHealth() ? this.playerA : this.playerB;
        let defender = attacker === this.playerA ? this.playerB : this.playerA;

        while (this.playerA.getHealth() > 0 && this.playerB.getHealth() > 0) {
            this.performAttack(attacker, defender);

            // Swap roles
            [attacker, defender] = [defender, attacker];
        }

        console.log(`Battle over! ${this.playerA.getHealth() === 0 ? 'Player B wins!' : 'Player A wins!'}`);
    }

    performAttack(attacker, defender) {
        const attackRoll = this.dice.roll();
        const defendRoll = this.dice.roll();

        const attackDamage = attacker.getAttack() * attackRoll;
        const defendStrength = defender.getStrength() * defendRoll;

        const damage = Math.max(0, attackDamage - defendStrength);
        defender.reduceHealth(damage);

        console.log(`Attacker: ${attacker} rolled ${attackRoll} for an attack damage of ${attackDamage}`);
        console.log(`Defender: ${defender} rolled ${defendRoll} for a defense of ${defendStrength}`);
        console.log(`Defender's health is now ${defender.getHealth()}`);
    }
}

module.exports = Arena;
