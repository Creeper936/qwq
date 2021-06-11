function doSomething () {
	
}
let 感温 = 0
let tm = 0
let 四位数码管 = TM1637.create(
DigitalPin.P13,
DigitalPin.P14,
7,
4
)
NTCSenor.set(NTC_B.B3380)
basic.forever(function () {
    tm += 1
    basic.pause(1000)
})
basic.forever(function () {
    四位数码管.showNumber(tm)
})
basic.forever(function () {
    感温 = NTCSenor.Temperature(pins.analogReadPin(AnalogPin.P0))
})
