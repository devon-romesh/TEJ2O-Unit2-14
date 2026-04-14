/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Devon            
 * Created on: Apr 2026
 * This program makes a whole circle with one pixel 
*/

let sprite: game.LedSprite = null
let loopCounterX = 0
let loopCounterY = 0

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// when A's pressed, the pixels move clockwise
input.onButtonPressed(Button.A, function () {

    // setup
    basic.clearScreen()
    sprite = game.createSprite(0, 0)

    // goes left to right
    while (loopCounterY <= 4) {
        sprite.set(LedSpriteProperty.X, loopCounterY)
        loopCounterY += 1
        basic.pause(350)
    }

    // goes up to down
    while (loopCounterX <= 4) {
        sprite.set(LedSpriteProperty.Y, loopCounterX)
        loopCounterX += 1
        basic.pause(350)

    }

    // goes right to left
    while (loopCounterY >= 0) {
        sprite.set(LedSpriteProperty.X, loopCounterY)
        loopCounterY -= 1
        basic.pause(350)
    }

    // goes down to up
    while (loopCounterX >= 0) {
        sprite.set(LedSpriteProperty.Y, loopCounterX)
        loopCounterX -= 1
        basic.pause(350)
    }

    sprite.delete()
    basic.showIcon(IconNames.Happy)
})

// when B's pressed, the pixels move counter clock wise
input.onButtonPressed(Button.B, function () {

    // setup
    basic.clearScreen()
    sprite = game.createSprite(0, 0)

    // goes up to down
    while (loopCounterX <= 4) {
        sprite.set(LedSpriteProperty.Y, loopCounterX)
        loopCounterX += 1
        basic.pause(350)
    }

    // goes left to right 
    while (loopCounterY <= 4) {
        sprite.set(LedSpriteProperty.X, loopCounterY)
        loopCounterY += 1
        basic.pause(350)
    }

    // goes down to up
    while (loopCounterX >= 0) {
        sprite.set(LedSpriteProperty.Y, loopCounterX)
        loopCounterX -= 1
        basic.pause(350)
    }

    // goes right to left
    while (loopCounterY >= 0) {
        sprite.set(LedSpriteProperty.X, loopCounterY)
        loopCounterY -= 1
        basic.pause(350)
    }
    sprite.delete()
    basic.showIcon(IconNames.Happy)
})




