cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x00ff00)
cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x00ff00)
basic.forever(function () {
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
        cuteBot.motors(50, 50)
    } else if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        cuteBot.motors(25, 50)
    } else if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        cuteBot.motors(50, 25)
    } else {
        cuteBot.moveTime(cuteBot.Direction.left, 50, 0.1)
        basic.pause(100)
        cuteBot.moveTime(cuteBot.Direction.forward, 50, 0.1)
    }
})
