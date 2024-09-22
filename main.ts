input.onButtonPressed(Button.A, function () {
    recycled += 1
    basic.showNumber(recycled)
})
input.onButtonPressed(Button.B, function () {
    not_recycled += 1
    basic.showNumber(not_recycled)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Not recycled")
    basic.showNumber(not_recycled)
    basic.pause(1000)
    basic.showString("Recycled")
    basic.showNumber(recycled)
})
let not_recycled = 0
let recycled = 0
recycled = 0
not_recycled = 0
