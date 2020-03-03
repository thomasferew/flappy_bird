controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile3 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 3 3 3 3 3 . . . . . . 
. . . . 3 3 3 3 3 3 3 . . . . . 
. . . . 3 3 3 3 3 3 3 3 . . . . 
. . . . 3 3 3 3 3 3 3 3 . . . . 
. . . . . 3 3 3 3 3 3 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, mySprite, 50, 100)
})
// the background of the game
function background () {
    scene.setBackgroundImage(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f 5 5 5 5 f 5 5 5 f 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f 5 5 f f 5 f f f f f 5 f 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 5 5 f f f 5 f f f f f 5 f f 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f 5 5 f f f 5 5 5 f f f f 5 5 f f 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f 5 5 f f f 5 5 5 5 f f f f 5 5 f f f 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f 5 5 f f f f f f f f f f f f f f f f f f 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f 5 5 f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f 5 5 f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f 5 5 5 f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f 5 5 5 f f f f f f f f f f f f f f f f f f 5 5 f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f 5 5 5 f f f 5 f f f f f 5 f 5 f f f f 5 5 f f f f f f f f f f f f f f f f f 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f 5 5 5 f 5 5 5 f f f 5 5 5 5 5 f f 5 5 f f f f f f f f f f f f f f f f f f 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 f 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f 1 f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 1 1 1 1 1 1 1 1 1 1 2 2 2 1 1 1 1 1 1 1 1 f f f f f 1 1 1 1 1 1 1 1 1 1 f 1 f 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 1 1 1 1 1 1 1 2 1 1 7 2 7 1 1 1 1 1 1 1 1 f 1 7 1 7 1 1 1 1 1 1 1 1 1 1 f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 1 1 1 1 1 1 1 2 2 1 2 2 2 1 1 1 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 1 1 1 1 f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 1 1 1 1 1 1 1 1 2 2 2 2 2 2 1 1 1 1 1 1 1 1 1 7 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 1 1 1 1 1 1 1 1 1 2 2 2 2 2 1 1 1 1 1 1 1 6 6 6 6 6 1 1 1 1 1 1 1 1 1 f f f 5 f f f 1 f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 1 1 1 1 1 1 1 1 1 1 2 2 2 1 1 1 1 1 1 1 1 7 6 6 6 7 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 1 1 1 1 1 1 1 1 1 1 2 2 2 1 1 1 1 1 1 1 1 1 6 6 6 1 1 1 1 1 1 1 1 1 1 1 f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 1 1 1 1 1 1 1 1 1 1 2 1 2 1 1 1 1 1 1 1 1 1 6 6 6 1 1 1 1 1 1 1 1 1 1 1 f f 1 f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b f f b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b f f b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b f f b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b f f b b b b b b b b b f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b f f b b b b b b b b b f f f f f f 7 7 7 7 7 f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f 7 7 7 f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f 7 7 f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b 5 5 b b b b b b b b b b f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b 5 5 b b b b b b b b b b 5 5 b b b b b b b b b b f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b 5 5 b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b f f b b b b b b b b b f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 e e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b f f b b b b b b b b b f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 e e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 e e e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 e e e e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f 7 7 7 7 7 e 7 7 7 e e e e e 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f 7 7 7 e 7 7 e e e e e e 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f 7 7 7 7 7 e e e e e e e 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f 7 7 7 7 e e e e e e e 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f e e 7 7 e e e e e e 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b 5 5 b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f e e e e e e e e e 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b 5 5 b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f e e e e e e e e 7 e 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f e e e e e e e e e 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b 5 5 b b b b b b b b b b f f f f f f f f f f f f f f f f e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b 5 5 b b b b b b b b b b f f f f f f f f f f f f f f f f e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b f f b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b f f b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b f f b b b b b b b b f f f f f f f f f f f f f f f e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b f f b b b b b b b b f f f f f f f f f f f f f f f e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b 5 5 b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b 5 5 b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f e e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f e e e e e e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -100
})
// if my sprite overlaps with projectile game over.
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Projectile, function (sprite, otherSprite) {
    projectile3 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 3 3 3 3 3 . . . . . . 
. . . . 3 3 3 3 3 3 3 . . . . . 
. . . . 3 3 3 3 3 3 3 3 . . . . 
. . . . 3 3 3 3 3 3 3 3 . . . . 
. . . . . 3 3 3 3 3 3 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, projectile2, 50, 100)
    game.over(false)
})
// my sprite
function bird () {
    mySprite = sprites.create(img`
. . . . . 2 . . . . . . . . . . 
. . . . . . 2 . . . . . . . . . 
. . . . . . 2 2 2 2 . . . . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . 2 2 1 f 1 f 2 . . . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . . . 2 2 2 2 2 2 4 . . . . 
. 2 2 2 2 2 2 2 2 2 4 4 4 4 . . 
2 2 2 5 5 2 2 2 2 4 4 4 4 4 4 . 
. 2 2 5 5 5 5 5 2 2 2 2 2 . . . 
. 2 2 2 5 5 5 5 5 5 2 2 2 . . . 
. . . 2 2 2 5 5 5 2 2 2 2 . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    mySprite.ay = 300
    mySprite.say("ouff", 2000)
}
let projectile: Sprite = null
let bottomimage: Image = null
let topimage: Image = null
let gap = 0
let projectile2: Sprite = null
let mySprite: Sprite = null
let projectile3: Sprite = null
bird()
background()
game.splash("press A to jump: avoid sharks and obstacle")
effects.blizzard.startScreenEffect(5000)
// obsatcles for the game picks random 0 to 3
game.onUpdateInterval(1500, function () {
    info.changeScoreBy(1)
    gap = Math.randomRange(0, 3)
    if (gap == 0) {
        topimage = img`
. . . . . 6 e e e e e e e e e e c e 6 . . . . . 
. . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . . 
. . . 6 7 7 6 6 6 6 e e e e 6 7 6 6 7 7 6 . . . 
. . 6 7 7 6 e e 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c e 7 7 e e e e 6 7 e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . b e e e e e e e e e e b . . . . . . 
. . . . . . . b e e e e e e e e b . . . . . . . 
. . . . . . . . b e e e e e e b . . . . . . . . 
`
        bottomimage = img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . b b b b . . . . . . . . . . 
. . . . . . . . b b d d d d b b . . . . . . . . 
. . . . . . . b d d b b b b d d b . . . . . . . 
. . . . . . b d b b d d d d b b d b . . . . . . 
. . . . . b d b b d b b b b d b b d b . . . . . 
. . . . . b d b d b d d d d b d b d b . . . . . 
. . . . . c d b b d b b b b d b b d c . . . . . 
. . . . . c b d b b d d d d b b d b c . . . . . 
. . . . . e f b d d b b b b d d b c e . . . . . 
. . . . . e e f f b d d d d b c c e e . . . . . 
. . . . . e e e e f f c c c c e e e . . . . . . 
. . . . . c e e e e e e e e e e e e . . . . . . 
. . . . . c e e e e e e e e e e e e . . . . . . 
. . . . . f e e e e e e e e e e e e . . . . . . 
. . . . . c c e e e e e e e e e e e . . . . . . 
. . . . . . f e e e e e e e e e e e . . . . . . 
. . . . . 6 f c e e e e e e e e e e 6 . . . . . 
. . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 e e e e 6 6 6 6 7 7 6 . . . 
. . 6 7 7 6 8 e 6 7 7 6 6 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 e e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . e e 7 7 e e e e 7 7 e c e e . . . . 
. . . . . . e e 6 e e e e e e 6 e e f . . . . . 
. . . . . . e e e e e e e e e e e e f . . . . . 
. . . . . . e e e e e e e e e e e e f . . . . . 
. . . . . . e e e e e e e e e e e c f . . . . . 
. . . . . . c e e e e e e e e e e c f . . . . . 
. . . . . . c e e e e e e e e e e f f . . . . . 
. . . . . . f e e e e e e e e e e f e . . . . . 
. . . . . 6 f e e e e e e e e e e f 6 . . . . . 
. . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 e e e e 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 e e 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 e e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . e e 7 7 e e e e 6 7 e e . . . . . . 
. . . . . . e e 6 e e e e e e 6 c e . . . . . . 
. . . . . . e e f e e e e e e e c e . . . . . . 
. . . . . . e e c e e e e e e e c e . . . . . . 
. . . . . . e e c e e e e e e e f e . . . . . . 
. . . . . . e e c e e e e e e e f e . . . . . . 
. . . . . . e e e e e e e e e e f e . . . . . . 
. . . . . . e e e e e e e e e e c e . . . . . . 
. . . . . 6 e e e e e e e e e e c e 6 . . . . . 
. . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . . 
. . . 6 7 7 6 6 6 6 e e e e 6 7 6 6 7 7 6 . . . 
. . 6 7 7 6 e e 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c e 7 7 e e e e 6 7 e e . . . . . . 
. . . . . . c e 6 e e e e e e 6 e e . . . . . . 
`
    } else if (gap == 1) {
        topimage = img`
. . . . . 6 f e e e e e e e e e e f 6 . . . . . 
. . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 e e e e 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 e e 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 e e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . e e 7 7 e e e e 6 7 e e e e . . . . 
. . . . . . e e 6 e e e e e e 6 c e f . . . . . 
. . . . . . e e e e e e e e e e e e f . . . . . 
. . . . . . e e e e e e e e e e e e f . . . . . 
. . . . . . e e e e e e e e e e e c f . . . . . 
. . . . . . e e e e e e e e e e e c f . . . . . 
. . . . . . e e e e e e e e e e e f f . . . . . 
. . . . . . f e e e e e e e e e e f e . . . . . 
. . . . . 6 f e e e e e e e e e e f 6 . . . . . 
. . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 e e e e 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 e e 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 e e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . e e 7 7 e e e e 6 7 e e . . . . . . 
. . . . . . e e 6 e e e e e e 6 c e . . . . . . 
. . . . . . e e f e e e e e e e c e . . . . . . 
. . . . . . e e c e e e e e e e c e . . . . . . 
. . . . . . e e c e e e e e e e f e . . . . . . 
. . . . . . e e c e e e e e e e f e . . . . . . 
. . . . . . e e e e e e e e e e f e . . . . . . 
. . . . . . e e e e e e e e e e c e . . . . . . 
. . . . . 6 e e e e e e e e e e c e 6 . . . . . 
. . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . . 
. . . 6 7 7 6 6 6 6 e e e e 6 7 6 6 7 7 6 . . . 
. . 6 7 7 6 e e 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c e 7 7 e e e e 6 7 e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . b e e e e e e e e e e b . . . . . . 
. . . . . . . b e e e e e e e e b . . . . . . . 
. . . . . . . . b e e e e e e b . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`
        bottomimage = img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . b b b b . . . . . . . . . . 
. . . . . . . . b b d d d d b b . . . . . . . . 
. . . . . . . b d d b b b b d d b . . . . . . . 
. . . . . . b d b b d d d d b b d b . . . . . . 
. . . . . b d b b d b b b b d b b d b . . . . . 
. . . . . b d b d b d d d d b d b d b . . . . . 
. . . . . c d b b d b b b b d b b d c . . . . . 
. . . . . c b d b b d d d d b b d b c . . . . . 
. . . . . e f b d d b b b b d d b c e . . . . . 
. . . . . e e f f b d d d d b c c e e . . . . . 
. . . . . e e e e f f c c c c e e e . . . . . . 
. . . . . c e e e e e e e e e e e e . . . . . . 
. . . . . c e e e e e e e e e e e e . . . . . . 
. . . . . f e e e e e e e e e e e e . . . . . . 
. . . . . c c e e e e e e e e e e e . . . . . . 
. . . . . . f e e e e e e e e e e e . . . . . . 
. . . . . 6 f c e e e e e e e e e e 6 . . . . . 
. . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 e e e e 6 6 6 6 7 7 6 . . . 
. . 6 7 7 6 8 e 6 7 7 6 6 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 e e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . e e 7 7 e e e e 7 7 e c e e . . . . 
. . . . . . e e 6 e e e e e e 6 e e f . . . . . 
`
    } else if (gap == 2) {
        topimage = img`
. . . . . 6 f e e e e e e e e e e f 6 . . . . . 
. . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 e e e e 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 e e 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 e e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . e e 7 7 e e e e 6 7 e e . . . . . . 
. . . . . . e e 6 e e e e e e 6 c e . . . . . . 
. . . . . . e e f e e e e e e e c e . . . . . . 
. . . . . . e e c e e e e e e e c e . . . . . . 
. . . . . . e e c e e e e e e e f e . . . . . . 
. . . . . . e e c e e e e e e e f e . . . . . . 
. . . . . . e e e e e e e e e e f e . . . . . . 
. . . . . . e e e e e e e e e e c e . . . . . . 
. . . . . 6 e e e e e e e e e e c e 6 . . . . . 
. . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . . 
. . . 6 7 7 6 6 6 6 e e e e 6 7 6 6 7 7 6 . . . 
. . 6 7 7 6 e e 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c e 7 7 e e e e 6 7 e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . b e e e e e e e e e e b . . . . . . 
. . . . . . . b e e e e e e e e b . . . . . . . 
. . . . . . . . b e e e e e e b . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`
        bottomimage = img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . b b b b . . . . . . . . . . 
. . . . . . . . b b d d d d b b . . . . . . . . 
. . . . . . . b d d b b b b d d b . . . . . . . 
. . . . . . b d b b d d d d b b d b . . . . . . 
. . . . . b d b b d b b b b d b b d b . . . . . 
. . . . . b d b d b d d d d b d b d b . . . . . 
. . . . . c d b b d b b b b d b b d c . . . . . 
. . . . . c b d b b d d d d b b d b c . . . . . 
. . . . . e f b d d b b b b d d b c e . . . . . 
. . . . . e e f f b d d d d b c c e e . . . . . 
. . . . . e e e e f f c c c c e e e . . . . . . 
. . . . . c e e e e e e e e e e e e . . . . . . 
. . . . . c e e e e e e e e e e e e . . . . . . 
. . . . . f e e e e e e e e e e e e . . . . . . 
. . . . . c c e e e e e e e e e e e . . . . . . 
. . . . . . f e e e e e e e e e e e . . . . . . 
. . . . . 6 f c e e e e e e e e e e 6 . . . . . 
. . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 e e e e 6 6 6 6 7 7 6 . . . 
. . 6 7 7 6 8 e 6 7 7 6 6 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 e e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . e e 7 7 e e e e 7 7 e c e e . . . . 
. . . . . . e e 6 e e e e e e 6 e e f . . . . . 
. . . . . . e e e e e e e e e e e e f . . . . . 
. . . . . . e e e e e e e e e e e e f . . . . . 
. . . . . . e e e e e e e e e e e c f . . . . . 
. . . . . . c e e e e e e e e e e c f . . . . . 
. . . . . . c e e e e e e e e e e f f . . . . . 
. . . . . . f e e e e e e e e e e f e . . . . . 
. . . . . 6 f e e e e e e e e e e f 6 . . . . . 
. . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 e e e e 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 e e 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 e e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . e e 7 7 e e e e 6 7 e e . . . . . . 
. . . . . . e e 6 e e e e e e 6 c e . . . . . . 
`
    } else {
        topimage = img`
. . . . . 6 e e e e e e e e e e c e 6 . . . . . 
. . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . . 
. . . 6 7 7 6 6 6 6 e e e e 6 7 6 6 7 7 6 . . . 
. . 6 7 7 6 e e 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c e 7 7 e e e e 6 7 e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . b e e e e e e e e e e b . . . . . . 
. . . . . . . b e e e e e e e e b . . . . . . . 
. . . . . . . . b e e e e e e b . . . . . . . . 
`
        bottomimage = img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . b b b b . . . . . . . . . . 
. . . . . . . . b b d d d d b b . . . . . . . . 
. . . . . . . b d d b b b b d d b . . . . . . . 
. . . . . . b d b b d d d d b b d b . . . . . . 
. . . . . b d b b d b b b b d b b d b . . . . . 
. . . . . b d b d b d d d d b d b d b . . . . . 
. . . . . c d b b d b b b b d b b d c . . . . . 
. . . . . c b d b b d d d d b b d b c . . . . . 
. . . . . e f b d d b b b b d d b c e . . . . . 
. . . . . e e f f b d d d d b c c e e . . . . . 
. . . . . e e e e f f c c c c e e e . . . . . . 
. . . . . c e e e e e e e e e e e e . . . . . . 
. . . . . c e e e e e e e e e e e e . . . . . . 
. . . . . f e e e e e e e e e e e e . . . . . . 
. . . . . c c e e e e e e e e e e e . . . . . . 
. . . . . . f e e e e e e e e e e e . . . . . . 
. . . . . 6 f c e e e e e e e e e e 6 . . . . . 
. . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 e e e e 6 6 6 6 7 7 6 . . . 
. . 6 7 7 6 8 e 6 7 7 6 6 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 e e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . e e 7 7 e e e e 7 7 e c e e . . . . 
. . . . . . e e 6 e e e e e e 6 e e f . . . . . 
. . . . . . e e e e e e e e e e e e f . . . . . 
. . . . . . e e e e e e e e e e e e f . . . . . 
. . . . . . e e e e e e e e e e e c f . . . . . 
. . . . . . c e e e e e e e e e e c f . . . . . 
. . . . . . c e e e e e e e e e e f f . . . . . 
. . . . . . f e e e e e e e e e e f e . . . . . 
. . . . . 6 f e e e e e e e e e e f 6 . . . . . 
. . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 e e e e 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 e e 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 e e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . e e 7 7 e e e e 6 7 e e . . . . . . 
. . . . . . e e 6 e e e e e e 6 c e . . . . . . 
. . . . . . e e f e e e e e e e c e . . . . . . 
. . . . . . e e c e e e e e e e c e . . . . . . 
. . . . . . e e c e e e e e e e f e . . . . . . 
. . . . . . e e c e e e e e e e f e . . . . . . 
. . . . . . e e e e e e e e e e f e . . . . . . 
. . . . . . e e e e e e e e e e c e . . . . . . 
. . . . . 6 e e e e e e e e e e c e 6 . . . . . 
. . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . . 
. . . 6 7 7 6 6 6 6 e e e e 6 7 6 6 7 7 6 . . . 
. . 6 7 7 6 e e 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c e 7 7 e e e e 6 7 e e . . . . . . 
. . . . . . c e 6 e e e e e e 6 e e . . . . . . 
. . . . . . c e e e e e e e e e e e . . . . . . 
. . . . . . f c c e e e e e e c e e . . . . . . 
. . . . . . f c c c e e e c e c c e . . . . . . 
. . . . . . f c c e e e c c e c c c . . . . . . 
. . . . . . f c c c e e c c e c c c . . . . . . 
. . . . . . f c c c c c e c e e c c . . . . . . 
. . . . . 6 f c c c c c c c c c c f 6 . . . . . 
. . . . 6 7 7 6 c c c c c c c c c 6 7 6 . . . . 
. . . 6 7 7 6 6 7 6 c c c c 6 7 6 6 7 7 6 . . . 
. . 6 7 7 6 c c 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c c 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c c 7 7 c c c c 6 7 c f . . . . . . 
. . . . . . c c 6 c c c c c c 6 c f . . . . . . 
`
    }
    projectile = sprites.createProjectileFromSide(topimage, -45, 0)
    projectile.top = 0
    projectile = sprites.createProjectileFromSide(bottomimage, -45, 0)
    projectile.bottom = scene.screenHeight()
})
// if sprite touches the top or bottom of map game
//
//
// over
game.onUpdate(function () {
    if (mySprite.bottom > 120 || mySprite.top < 0) {
        game.over(false)
    }
})
// projectile if you overlap with them game over
game.onUpdateInterval(500, function () {
    projectile2 = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . 9 9 9 . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . 9 9 9 9 . . 9 9 9 9 9 9 9 9 9 9 9 9 9 . . . . . . . . . 
. . . . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 f 9 9 9 9 . . . . . . 
. . . . . . . 9 9 9 9 9 9 9 9 2 2 9 9 9 9 9 9 9 2 9 . . . . . . 
. . . . . . . 9 9 9 6 6 9 9 6 9 2 1 1 1 1 1 1 1 2 9 . . . . . . 
. . . . 9 9 9 9 9 9 9 6 9 9 6 9 9 9 9 9 9 9 9 9 9 . . . . . . . 
. . . 9 9 9 9 . . . 9 9 6 6 9 9 9 9 9 9 9 9 9 9 . . . . . . . . 
. . . 9 9 9 . . . . . 9 9 9 9 9 9 9 9 9 9 9 . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, -100, 0)
    projectile2.setPosition(160, 100)
    projectile2.setPosition(160, Math.randomRange(0, 100))
})
