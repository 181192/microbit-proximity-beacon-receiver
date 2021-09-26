radio.onReceivedNumber(function (receivedNumber) {
    signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    mx = Math.map(signal, -95, -42, 0, 9)
    led.plotBarGraph(
    mx,
    9
    )
    music.setVolume(255)
    music.playMelody("E - E - E - E - ", 44 * mx)
})
let mx = 0
let signal = 0
radio.setGroup(8)
music.setVolume(10)
loops.everyInterval(30000, function () {
    mx = 0
    led.plotBarGraph(
    mx,
    9
    )
    music.setVolume(0)
})
