input.onButtonPressed(Button.A, function () {
    mode += 1
    if (mode > 1) {
        mode = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (mode == 1) {
        state += 1
        if (state > 4) {
            state = 1
        }
    }
})
let state = 0
let mode = 0
mode = 0
basic.forever(function () {
    state = 1
    basic.pause(14000)
    state = 2
    basic.pause(1000)
    state = 3
    basic.pause(14000)
    state = 4
    basic.pause(1000)
})
basic.forever(function () {
    if (mode == 2) {
        if (state == 1) {
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . . . .
                . . # . .
                `)
            Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.On)
            Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.Off)
            Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.Off)
        }
        if (state == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # . # . #
                . . . . .
                . . . . .
                `)
            Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.On)
            Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.On)
            Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.Off)
        }
        if (state == 3) {
            basic.showLeds(`
                . . . . .
                . . . . #
                . . . # .
                # . # . .
                . # . . .
                `)
            Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.Off)
            Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.Off)
            Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.On)
        }
        if (state == 4) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # . # . #
                . . . . .
                . . . . .
                `)
            Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.Off)
            Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.On)
            Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.Off)
            basic.pause(1000)
        }
    }
})
