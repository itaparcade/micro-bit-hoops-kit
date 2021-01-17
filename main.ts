input.onButtonPressed(Button.A, function () {
    count = 0
    basic.showString("HOOPS ARCADE!")
    music.playMelody("C5 G B A F A C5 B ", 1000)
    basic.showIcon(IconNames.Square)
})
input.onButtonPressed(Button.B, function () {
    music.playTone(262, music.beat(BeatFraction.Double))
    if (count > 0) {
        count += -1
        if (count == 0) {
            basic.showIcon(IconNames.Square)
        } else {
            basic.showNumber(count)
        }
    }
})
input.onPinPressed(TouchPin.P1, function () {
    music.playMelody("C D E F G A B C5 ", 1000)
    count += 1
    basic.showNumber(count)
    if (count == 7) {
        basic.showIcon(IconNames.Surprised)
        for (let index = 0; index < 4; index++) {
            music.playMelody("G B A G C5 B A B ", 1000)
        }
        basic.showIcon(IconNames.Square)
        basic.pause(2000)
        count = 0
    }
})
let count = 0
count = 0
basic.showString("HOOPS ARCADE!")
music.playMelody("C5 G B A F A C5 B ", 1000)
basic.showIcon(IconNames.Square)
basic.forever(function () {
	
})
