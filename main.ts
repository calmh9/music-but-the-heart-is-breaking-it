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
        rhtythm1 = rhytghm * 500
        rhytghm = 4
        basic.showNumber(num)
    } else if (num == 2) {
        note2 = note
        note = 131
        num += 1
        rhythm2 = rhytghm * 500
        rhytghm = 4
        basic.showNumber(num)
    } else if (num == 3) {
        note3 = note
        note = 131
        num += 1
        rhythm3 = rhytghm * 500
        rhytghm = 4
        basic.showNumber(num)
    } else if (num == 4) {
        note4 = note
        note = 131
        num += 1
        rhythm4 = rhytghm * 500
        rhytghm = 4
        basic.showNumber(num)
    } else {
        note5 = note
        note = 131
        num = 1
        rhythm5 = rhytghm * 500
        rhytghm = 4
        basic.showNumber(num)
    }
})
input.onButtonPressed(Button.B, function () {
    rhytghm = rhytghm / 2
    if (rhytghm < 0.5) {
        rhytghm = 4
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # .
            # . . # .
            # # # # .
            `)
    }
    if (rhytghm == 4) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # .
            # . . # .
            # # # # .
            `)
    } else if (rhytghm == 2) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # . .
            # . # . .
            # # # . .
            `)
    } else if (rhytghm == 1) {
        basic.showIcon(IconNames.QuarterNote)
    } else {
        basic.showIcon(IconNames.EigthNote)
    }
})
input.onGesture(Gesture.Shake, function () {
    note1 = 131
    note2 = 131
    note3 = 131
    note4 = 131
    note5 = 131
    rhtythm1 = 4
    rhythm2 = 4
    rhythm3 = 4
    rhythm4 = 4
    rhythm5 = 4
    basic.showString("RESET")
    num = 1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Heart)
    music.playTone(note1, rhtythm1)
    music.playTone(note2, rhythm2)
    music.playTone(note3, rhythm3)
    music.playTone(note4, rhythm4)
    music.playTone(note5, rhythm5)
})
let rhythm5 = 0
let note5 = 0
let rhythm4 = 0
let note4 = 0
let rhythm3 = 0
let note3 = 0
let rhythm2 = 0
let note2 = 0
let rhtythm1 = 0
let note1 = 0
let rhytghm = 0
let num = 0
let note = 0
note = 131
num = 1
basic.showNumber(num)
rhytghm = 4
