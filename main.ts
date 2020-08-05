let nota = 0
music.setTempo(20)
basic.forever(function () {
    nota = pins.map(
    input.lightLevel(),
    0,
    255,
    131,
    988
    )
    music.ringTone(nota)
})
