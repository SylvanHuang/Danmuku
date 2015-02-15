# Danmuku
Danmuku / "弹幕"

# TODO

[ ] Colorful danmuku

# How to

First at all you have to get it: `git clone https://github.com/erjiaqing/Danmuku.git`

Then, install necessary packages: `cd Danmuku && npm install`

For this is just a beta version, you need to edit some lines:

`show.html` : 

`L7` : `<canvas id="danmuku" width="500" height="300"></canvas>` edit the value of `width`, `height` to the size you want

`L13` : `var socket = io.connect('http://localhost:8080');` edit the url to `http://IP:8080`

`index.html` :

`L59` : `var socket = io.connect('http://192.168.1.5:8080');` edit like `L13 @ show.html`

Finally, `node app.js` to startup the danmuku server

# License

MIT
