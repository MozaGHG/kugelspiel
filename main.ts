let x = 0
let z = 0
let ry = 0
let rx = 0
let rx1 = 0
let c = 0
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
    ry = 4
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
loops.everyInterval(1500, function () {
    rx = randint(0, 4)
    rx1 = randint(0, 4)
})
loops.everyInterval(500, function () {
    if (z == 1) {
        c = 0
        led.plot(rx, 4)
        basic.pause(500)
        led.unplot(rx, 4)
        led.plot(rx, 3)
        basic.pause(500)
        led.unplot(rx, 3)
        led.plot(rx, 2)
        basic.pause(500)
        led.unplot(rx, 2)
        led.plot(rx, 1)
        basic.pause(500)
        led.unplot(rx, 1)
        led.plot(rx, 0)
        basic.pause(500)
        led.unplot(rx, 0)
        c = 1
    }
})
loops.everyInterval(500, function () {
    if (z == 1) {
        if (c == 1) {
            led.plot(rx1, 4)
            basic.pause(500)
            led.unplot(rx1, 4)
            led.plot(rx1, 3)
            basic.pause(500)
            led.unplot(rx1, 3)
            led.plot(rx1, 2)
            basic.pause(500)
            led.unplot(rx1, 2)
            led.plot(rx1, 1)
            basic.pause(500)
            led.unplot(rx1, 1)
            led.plot(rx1, 0)
            basic.pause(500)
            led.unplot(rx1, 0)
        }
    }
})
basic.forever(function () {
    if (z == 1) {
        led.plot(x, 2)
    }
})
