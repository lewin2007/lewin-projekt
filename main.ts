game.startCountdown(20000)
let coins = game.createSprite(randint(0, 4), randint(0, 4))
coins.set(LedSpriteProperty.Brightness, 180)
let char = game.createSprite(2, 2)
while (true) {
    if (char.isTouching(coins)) {
        coins.set(LedSpriteProperty.X, randint(0, 4))
        coins.set(LedSpriteProperty.Y, randint(0, 4))
        game.addScore(1)
    }
    if (input.acceleration(Dimension.X) > 0) {
        char.change(LedSpriteProperty.X, 1)
        basic.pause(100)
    }
    if (input.acceleration(Dimension.X) < 0) {
        char.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    }
    if (input.acceleration(Dimension.Y) > 0) {
        char.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
    if (input.acceleration(Dimension.Y) < 0) {
        char.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
}
