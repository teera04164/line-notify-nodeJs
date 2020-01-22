# LINE Notify Nodejs

A Simple LINE Messenger Notify by Nodejs

## Prerequisites

You have to generate access token on below site.

https://notify-bot.line.me

1. log in
2. menu > my page
3. click Generate token
5. enter a token name
6. Select a chat to send notifications
7. click Generate token
8. copy token
9. past token to .env

## Installation

```javascript
npm install
```

## Usage

```javascript
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
```
## Run Script

```javascript
node index.js
```
## Line Sticker
[LINE Sticker ](https://devdocs.line.me/files/sticker_list.pdf)
## Reference

[LINE Notify API Document](https://notify-bot.line.me/doc/)
