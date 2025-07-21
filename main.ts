controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (mySprite.overlapsWith(mySprite2) && false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    }
})
function _1 () {
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    controller.player1.moveSprite(mySprite)
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, mySprite)
}
function _2 () {
    mySprite2 = sprites.create(img`
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 5 5 f f . . . . . 
        . . . . f 1 5 2 5 1 6 f . . . . 
        . . . f 1 6 6 6 6 6 1 6 f . . . 
        . . . f 6 6 f f f f 6 1 f . . . 
        . . . f 6 f f d d f f 6 f . . . 
        . . f 6 f d f d d f d f 6 f . . 
        . . f 6 f d 3 d d 3 d f 6 f . . 
        . . f 6 6 f d d d d f 6 6 f . . 
        . f 6 6 f 3 f f f f 3 f 6 6 f . 
        . . f f d 3 5 3 3 5 3 d f f . . 
        . . f d d f 3 5 5 3 f d d f . . 
        . . . f f 3 3 3 3 3 3 f f . . . 
        . . . f 3 3 5 3 3 5 3 3 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    controller.player2.moveSprite(mySprite2)
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, mySprite2)
}
function ArrierePlan () {
    splitScreen.setBorderColor(15)
    game.setDialogFrame(img`
        999999999999999999999999
        966666666666666666666669
        969999999999999999999969
        999999999999999999999999
        898668999999999999866898
        898998999999999999899898
        898888999999999999888898
        899999999999999999999998
        899999999999999999999998
        899999999999999999999998
        899999999999999999999998
        899999999999999999999998
        899999999999999999999998
        899999999999999999999998
        899999999999999999999998
        899999999999999999999998
        899999999999999999999998
        899999999999999999999998
        898668999999999999866898
        898998999999999999899898
        898888999999999999888898
        889999999999999999999988
        888888888888888888888888
        888888888888888888888888
        `)
    if (Math.percentChance(25)) {
        scene.setBackgroundColor(12)
        tiles.setCurrentTilemap(tilemap`niveau2`)
        game.showLongText("Red Map", DialogLayout.Full)
        mySprite.setScale(2, ScaleAnchor.Middle)
    } else {
        if (Math.percentChance(33)) {
            scene.setBackgroundColor(12)
            tiles.setCurrentTilemap(tilemap`niveau1`)
            mySprite2.setScale(2, ScaleAnchor.Middle)
        } else {
            if (Math.percentChance(50)) {
                scene.setBackgroundColor(12)
                tiles.setCurrentTilemap(tilemap`niveau3`)
                mySprite3.setScale(2, ScaleAnchor.Middle)
            } else {
                scene.setBackgroundColor(12)
                tiles.setCurrentTilemap(tilemap`niveau4`)
                mySprite4.setScale(2, ScaleAnchor.Middle)
            }
        }
    }
}
function _4 () {
    mySprite4 = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f 1 1 1 1 f f . . . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . f d 1 1 1 1 1 1 1 1 d f . . 
        . . f d 1 1 1 1 1 1 1 1 d f . . 
        . . f d d d 1 1 1 1 d d d f . . 
        . . f b d b f d d f b d b f . . 
        . . f c d c f 1 1 f c d c f . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . f f f c d b 1 b d f f f f . 
        f c 1 1 1 c b f b f c 1 1 1 c f 
        f 1 b 1 b 1 f f f f 1 b 1 b 1 f 
        f b f b f f f f f f b f b f b f 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        `, SpriteKind.Player)
    controller.player4.moveSprite(mySprite4)
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera4, mySprite4)
}
function StatusBars () {
    statusbar = statusbars.create(36, 4, StatusBarKind.Health)
    statusbar.attachToSprite(mySprite, 2, 0)
    statusbar.max = 3
    statusbar.setBarBorder(1, 15)
}
function Boot () {
    Personnage()
    ArrierePlan()
    statusbars_game()
}
function Personnage () {
    _1()
    _2()
    _3()
    _4()
}
function StatusBars3 () {
    statusbar3 = statusbars.create(36, 4, StatusBarKind.Health)
    statusbar3.attachToSprite(mySprite3, 2, 0)
    statusbar3.max = 3
    statusbar3.setBarBorder(1, 15)
}
function statusbars_game () {
    StatusBars()
    StatusBars2()
    StatusBars3()
    StatusBars4()
}
function StatusBars2 () {
    statusbar = statusbars.create(36, 4, StatusBarKind.Health)
    statusbar.attachToSprite(mySprite2, 2, 0)
    statusbar.max = 3
    statusbar.setBarBorder(1, 15)
}
function StatusBars4 () {
    statusbar4 = statusbars.create(36, 4, StatusBarKind.Health)
    statusbar4.attachToSprite(mySprite4, 2, 0)
    statusbar4.max = 3
    statusbar4.setBarBorder(1, 15)
}
function _3 () {
    mySprite3 = sprites.create(img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f 3 3 f f e e e e f f 3 3 f . 
        . f b b f b f e e f b f b b f . 
        . f b b e 1 f 4 4 f 1 e b b f . 
        f f b b f 4 4 4 4 4 4 f b b f f 
        f b b f f f e e e e f f f b b f 
        . f e e f b d d d d b f e e f . 
        . . e 4 c d d d d d d c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `, SpriteKind.Player)
    controller.player3.moveSprite(mySprite3)
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera3, mySprite3)
}
let statusbar4: StatusBarSprite = null
let statusbar3: StatusBarSprite = null
let statusbar: StatusBarSprite = null
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 320
    export const ARCADE_SCREEN_HEIGHT = 240
}
Boot()
