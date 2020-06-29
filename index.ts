export class Game {
  _rolls: number[] = [];

  roll(pins: number): void {
    this._rolls.push(pins);
  }

  isSpare([first, second]: [number, number]) {
    return first + second === 10;
  }

  bonusSpare(pins: number) {
    return pins * 2;
  }

  isStrike([_, second]: [number, number]) {
    return second === 10;
  }

  bonusStrike([pins, previous]: [number, number]) {
    return this.bonusSpare(pins) + previous;
  }

  score(): number {
    const totalScore: number = this._rolls.reduce((score, pins, i) => {
      const first = this._rolls[i - 1];
      const second = this._rolls[i - 2];
      console.log(i, pins, this._rolls);
      if (i === 20 && pins !== 10 && first !== 10) {
        score += pins;
      } else if (i === 20 && pins !== 10 && first !== 10 && second !== 10) {
        score += pins;
      } else if (this.isSpare([first, second])) {
        score += this.bonusSpare(pins);
      } else if (this.isStrike([first, second])) {
        score += this.bonusStrike([pins, first]);
        i++;
      } else {
        score += pins;
      }
      return score;
    }, 0);
    return totalScore;
  }
}
