basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        pins.servoWritePin(AnalogPin.P0, 180)
        basic.showIcon(IconNames.Happy)
        basic.pause(2000)
        basic.showIcon(IconNames.Sad)
    } else {
        pins.servoWritePin(AnalogPin.P0, 100)
    }
})
