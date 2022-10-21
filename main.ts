let Nombre = 0
let État_actuel = 0
let État_passé = 0
/**
 * Comparaison entre actuel et passé.
 */
/**
 * Mettre à jour le passé
 */
basic.forever(function () {
    État_actuel = pins.digitalReadPin(DigitalPin.P16)
    if (État_actuel != État_passé) {
        if (État_actuel == 1) {
            Nombre += 1
        }
    }
    État_passé = État_actuel
    basic.showNumber(Nombre)
})
