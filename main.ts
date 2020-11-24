let température = 0
radio.onReceivedNumber(function (receivedNumber) {
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(receivedNumber)
        basic.pause(1000)
        basic.clearScreen()
    }
})
basic.forever(function () {
    radio.setGroup(1)
    température = input.temperature()
    radio.sendNumber(température)
})
