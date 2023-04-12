input.onButtonPressed(Button.A, function () {
    for (let value of list) {
        if (value == "013F761C") {
            basic.showLeds(`
                . # # # .
                . # . . .
                . # # # .
                . # . . .
                . # . . .
                `)
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        }
        if (value == "1129AB1C") {
            basic.showLeds(`
                # # # . .
                # . # . .
                # # . # .
                # . # . .
                # # # . .
                `)
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 100)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.RED)
            DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.RED)
        }
        if (value == "337D2196") {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 45)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 45)
            DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.OFF)
            DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.RED)
        }
        if (value == "83CCED95") {
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 45)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 45)
            DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.RED)
            DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.OFF)
        }
        basic.pause(1000)
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
    }
    list = []
    maqueen.motorStop(maqueen.Motors.All)
})
input.onButtonPressed(Button.B, function () {
    serial.redirectToUSB()
    for (let value2 of list) {
        serial.writeLine("" + (value2))
    }
    serial.redirect(
    SerialPin.P1,
    SerialPin.P0,
    BaudRate.BaudRate115200
    )
})
let a = ""
let list: string[] = []
DFRobotMaqueenPlus.I2CInit()
serial.redirect(
SerialPin.P1,
SerialPin.P0,
BaudRate.BaudRate115200
)
list = []
maqueen.motorStop(maqueen.Motors.All)
DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
basic.forever(function () {
    a = serial.readUntil(serial.delimiters(Delimiters.Hash))
    list.push(a)
    serial.redirectToUSB()
    for (let value3 of list) {
        serial.writeLine("" + (value3))
    }
    serial.redirect(
    SerialPin.P1,
    SerialPin.P0,
    BaudRate.BaudRate115200
    )
})
