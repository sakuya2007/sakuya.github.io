'use strict';

// コンソールにHello World!を出力する
console.log('Hello World');

var canvas = document.getElementById('sanple');

var context = canvas.getContext('2d');

  context.fillRect(20,40,50,100);
  context.fillStyle = 'blue';
