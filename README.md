# Kata: Uncle Bobs Bowling game

Kata for Uncle Bobs [bowling game](http://butunclebob.com/ArticleS.UncleBob.TheBowlingGameKata)


### Start

```bash
$ git clone https://github.com/harrymt/bowling-game-kata.git
$ cd bowling-game-kata
$ git checkout -b start-n
```

### Tests

```bash
$ yarn test # or `npm run test`
```

![Begin the Kata](example.png)

10 frames in bowling and 10 pins up, 2 rolls per frame.
Getting them all down in a frame gets you a spare or a strike.
Spare if you used both balls, strike if you used one.
Bonus points for the frame:
- spare, next ball is added to previous frame
- strike, next 2 balls are added to frame you got the strike in
If you get a strike or spare in the last frame (10th), you are allowed to roll, 2 (strike) or 1 (spare) balls extra at the end of the game.

1. Game
2. All ones
3. One Spare
4. One Strike
5. The perfect game

### Example finished Kata

```bash
$ git checkout finished
```
