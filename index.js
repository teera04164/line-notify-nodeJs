const Line = require('./Line')

const Sticker = {
    smile: [171, 2],
    boom: [279, 4],
    cry: [16, 1]
}

const img = 'https://img.freepik.com/free-photo/little-boy-playing-superhero-playground_53876-46868.jpg?size=626&ext=jpg'

Line.initial()
Line.notify(`Hello!!`)
Line.notifySticker(`i'm cry`, ...Sticker.cry)
Line.notifyImage('Hero!!',img)
