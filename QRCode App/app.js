var qrImage = require('qr-image');
var fs = require('fs');

qrImage
	.image("http:www.google.com",{ type: 'png', size:20})
	.pipe(fs.createWriteStream("qrcode.png"));