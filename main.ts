let x = 0
let z = 0
let rx = 0
input.onGesture(Gesture.TiltRight, function () {
    if (x == 4) {
        music.playTone(156, music.beat(BeatFraction.Whole))
    } else {
        if (z == 1) {
            led.unplot(x, 2)
            x += 1
        }
    }
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    z = 1
    x = 2
})
input.onGesture(Gesture.TiltLeft, function () {
    if (x == 0) {
        music.playTone(156, music.beat(BeatFraction.Whole))
    } else {
        if (z == 1) {
            led.unplot(x, 2)
            x += -1
        }
    }
})
loops.everyInterval(500, function () {
    rx = randint(0, 4)
    led.plot(rx, 4)
})
basic.forever(function () {
    if (z == 1) {
        led.plot(x, 2)
    }
})
