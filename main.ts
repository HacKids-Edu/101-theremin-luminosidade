input.onButtonPressed(Button.A, function () {
    volume += -10
})
input.onButtonPressed(Button.B, function () {
    volume += 10
})
let nota = 0
music.setTempo(20)
let volume = 100
basic.forever(function () {
    led.plotBarGraph(
    volume,
    255
    )
    music.setVolume(volume)
    nota = pins.map(
    input.lightLevel(),
    0,
    255,
    131,
    988
    )
    music.ringTone(nota)
})
