let Stryke = 0
let strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
strip.clear()
strip.show()
basic.forever(function () {
    Stryke = pins.map(
    input.soundLevel(),
    0,
    100,
    0,
    12
    )
    Stryke = Math.round(Stryke)
    if (Stryke > 0) {
        for (let index = 0; index <= Stryke; index++) {
            strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Indigo))
            strip.show()
            basic.pause(30)
        }
        strip.clear()
        strip.show()
    }
})
