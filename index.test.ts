import { Game } from '.';

describe('BowlingGameTest', () => {
  let g: Game;

  beforeEach(() => (g = new Game()));
  it('1: test bowling game', () => {
    expect(g).not.toBe(null);
  });

  const rollMany = ({ roll, times }: { roll: number; times: number }) =>
    new Array(times).fill(0).forEach(() => g.roll(roll));

  it('2: test all ones', () => {
    const frames = 10;
    rollMany({ roll: 1, times: frames * 2 });
    expect(g.score()).toEqual(20);
  });

  it('3: one spare', () => {
    rollMany({ roll: 5, times: 2 });
    rollMany({ roll: 2, times: 18 });
    expect(g.score()).toEqual(48);
  });

  it('4: one strike', () => {
    rollMany({ roll: 2, times: 2 }); // 4
    g.roll(10); // strike
    rollMany({ roll: 2, times: 8 * 2 });
    expect(g.score()).toEqual(18);
  });

  it('5: the perfect game', () => {
    rollMany({ roll: 10, times: 10 });
    // As you are allowed 2 extra at the end, due to the last frame
    // having a spare or a strike in
    rollMany({ roll: 10, times: 2 });
    expect(g.score()).toEqual(300);
  });
});
