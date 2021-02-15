export class Game {
  public score: number = 0;
  public MAX_FRAMES: number = 10;

  private frames: number[] = [];

  roll(pins: number) {
    this.score += pins;

    if (this.frames.length % 2 === 1) {
      if (pins + this.frames[this.frames.length - 1] === 10) {
        this.score += pins;
      }
    }
    this.frames.push(pins);
  }
}
