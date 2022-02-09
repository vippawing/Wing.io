import * as PIXI from 'pixi.js-legacy'
import FontFaceObserver from 'fontfaceobserver'
import { Loader } from './Game/Lib/Loader'
import { Canvas } from './Game/Lib/Constants'
import Game from './Game'
import './assets/common/Font.css'

var Games: Game

const init = () => {
    Games = new Game({ width: window.innerWidth, height: window.innerHeight, backgroundColor: 0xCCCCCC })
    document.body.appendChild(Games.view)
}

window.addEventListener('resize', () => {
    Canvas.width = window.innerWidth, Canvas.height = window.innerHeight
    if (Games) {
        Games.renderer.resize(Canvas.width, Canvas.height)
        Games.Screen.resize(Canvas.width, Canvas.height)
    }
})

const FontA = new FontFaceObserver('cwTeXYen');
const FontB = new FontFaceObserver('FolksBold');
const FontC = new FontFaceObserver('NotoSansTC');
Promise.all([FontA.load(), FontB.load(), FontC.load()]).then(function () {
    Loader(init)
})