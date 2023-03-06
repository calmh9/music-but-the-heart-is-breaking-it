input.onButtonPressed(Button.A, function () {
    note = note * 1.05946309436
    music.playTone(note, music.beat(BeatFraction.Half))
    if (note >= 1046) {
        note = 131
    }
})
input.onButtonPressed(Button.AB, function () {
    if (num == 1) {
        note1 = note
        note = 131
        num += 1
        rhythm1 = rhythm * 500
        rhythm = 4
        basic.showNumber(num)
    } else if (num == 2) {
        note2 = note
        note = 131
        num += 1
        rhythm2 = rhythm * 500
        rhythm = 4
        basic.showNumber(num)
    } else if (num == 3) {
        note3 = note
        note = 131
        num += 1
        rhythm3 = rhythm * 500
        rhythm = 4
        basic.showNumber(num)
    } else if (num == 4) {
        note4 = note
        note = 131
        num += 1
        rhythm4 = rhythm * 500
        rhythm = 4
        basic.showNumber(num)
    } else {
        note5 = note
        note = 131
        num = 1
        rhythm5 = rhythm * 500
        rhythm = 4
        basic.showNumber(num)
    }
})
input.onButtonPressed(Button.B, function () {
    rhythm = rhythm / 2
    if (rhythm < 0.5) {
        rhythm = 4
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # .
            # . . # .
            # # # # .
            `)
    } else if (rhythm == 2) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # . .
            # . # . .
            # # # . .
            `)
    } else if (rhythm == 1) {
        basic.showIcon(IconNames.QuarterNote)
    } else {
        basic.showIcon(IconNames.EigthNote)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
    music.playTone(note1, rhythm1)
    music.playTone(note2, rhythm2)
    music.playTone(note3, rhythm3)
    music.playTone(note4, rhythm4)
    music.playTone(note5, rhythm5)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    note1 = 131
    note2 = 131
    note3 = 131
    note4 = 131
    note5 = 131
    rhythm1 = 4
    rhythm2 = 4
    rhythm3 = 4
    rhythm4 = 4
    rhythm5 = 4
    basic.showString("RESET")
    num = 1
})
let rhythm5 = 0
let note5 = 0
let rhythm4 = 0
let note4 = 0
let rhythm3 = 0
let note3 = 0
let rhythm2 = 0
let note2 = 0
let rhythm1 = 0
let note1 = 0
let rhythm = 0
let num = 0
let note = 0
basic.showLeds(`
    . # . . .
    # # . . #
    # # # # #
    . # # # #
    . # . . #
    `)
music.setTempo(168)
music.playTone(784, music.beat(BeatFraction.Half))
music.rest(music.beat(BeatFraction.Half))
music.playTone(659, music.beat(BeatFraction.Quarter))
music.rest(music.beat(BeatFraction.Quarter))
music.playTone(523, music.beat(BeatFraction.Quarter))
music.rest(music.beat(BeatFraction.Quarter))
music.playTone(587, music.beat(BeatFraction.Half))
music.rest(music.beat(BeatFraction.Half))
music.playTone(392, music.beat(BeatFraction.Half))
music.rest(music.beat(BeatFraction.Half))
music.playTone(392, music.beat(BeatFraction.Quarter))
music.rest(music.beat(BeatFraction.Quarter))
music.playTone(494, music.beat(BeatFraction.Quarter))
music.rest(music.beat(BeatFraction.Quarter))
music.playTone(587, music.beat(BeatFraction.Quarter))
music.rest(music.beat(BeatFraction.Quarter))
music.playTone(698, music.beat(BeatFraction.Quarter))
music.rest(music.beat(BeatFraction.Quarter))
music.playTone(659, music.beat(BeatFraction.Half))
music.rest(music.beat(BeatFraction.Half))
music.playTone(523, music.beat(BeatFraction.Half))
music.setTempo(120)
note = 131
num = 1
rhythm = 4
basic.showNumber(num)
