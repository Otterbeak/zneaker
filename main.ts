let pingdist = 0
bluetooth.startUartService()
music.playTone(262, music.beat(BeatFraction.Half))
basic.forever(function () {
    RobotCar_Keyestudio.Leds.showWhite()
    if (RobotCar_Keyestudio.IrSensors.isRightBlocked()) {
        RobotCar_Keyestudio.Leds.showGreen()
    }
    if (RobotCar_Keyestudio.IrSensors.isLeftBlocked()) {
        RobotCar_Keyestudio.Leds.showRed()
    }
    pingdist = RobotCar_Keyestudio.Sonar.ping()
    bluetooth.uartWriteLine("ping: " + convertToText(pingdist))
})
