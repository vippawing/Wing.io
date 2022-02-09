import * as PIXI from 'pixi.js-legacy'

const Loading = new PIXI.Loader()
var PixiResources: Object

const Loader = (init: Function) => {
    Loading
    .add("BackGround", "./src/assets/img/World/BackGround.png")
    .add("BackGround2", "./src/assets/img/World/BackGround2.png")
    .add("PlayerHead", "./src/assets/img/Player/PlayerHead.png")
    .add("PlayerHand", "./src/assets/img/Player/PlayerHand.png")
    .add("PlayerSword", "./src/assets/img/Player/PlayerSword.png")
    .add("SilverSlime", "./src/assets/img/SilverSlime/SilverSlime.png")
    .add("MagicCircle", "./src/assets/img/GroundObject/MagicCircle.png")
    .add("Rock", "./src/assets/img/GroundObject/Rock.png")
    .load((loader, resources) => {
        PixiResources = resources
        init()
    })
}

Loading.onLoad.add((event, target) => {
    console.log("載入項目：" + target.name)
    console.log("目前進度：" + Loading.progress + "%")
})

export { Loader, PixiResources }