import { expect } from 'chai';
import Player from '../Player.js';

describe('Player', () => {
    it('should reduce health correctly', () => {
        const player = new Player(50, 5, 10);
        player.reduceHealth(20);
        expect(player.getHealth()).to.equal(30);

        player.reduceHealth(40);
        expect(player.getHealth()).to.equal(0);
    });
});
