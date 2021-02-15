import { Game } from '.';

const TestHelpers = {
  newGame: () => new Game(),
  eachFrame: (frames: number, func: () => void) =>
    new Array(frames).fill(0).forEach(func),
};

describe('BowlingGameTest', () => {
  it('should have a game', () => {
    const g = TestHelpers.newGame();
    expect(g).not.toBe(null);
  });

  it('should be able to roll all ones', () => {
    const g = TestHelpers.newGame();
    TestHelpers.eachFrame(g.MAX_FRAMES, () => {
      g.roll(1);
      g.roll(1);
    });

    expect(g.score).toEqual(20);
  });

  it.only('one spare', () => {
    const g = TestHelpers.newGame();
    g.roll(5);
    g.roll(5); // spare

    TestHelpers.eachFrame(g.MAX_FRAMES - 1, () => {
      g.roll(1);
      g.roll(1);
    });
    expect(g.score).toEqual(29);
  });
});
