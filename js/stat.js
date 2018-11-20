/* Все поправил кроме первого замечания.
Как ты и сказал, отнял от облака высоту столбца CLOUD_HEIGHT - BAR_HEIGHT - TEXT_WIDTH (стр 56)
Но все равно отрисовывает сверху - вниз((
*/
'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_RENDER = 100;
var CLOUD_X = 140;
var GAP_CLOUD = 10;
var GAP = 50;
var TEXT_WIDTH = 20;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var getRndInteger = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_RENDER + GAP_CLOUD, GAP_CLOUD * 2, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_RENDER, GAP_CLOUD, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X - TEXT_WIDTH, BAR_WIDTH);
  ctx.fillText('Список результатов:', CLOUD_X - TEXT_WIDTH, BAR_WIDTH + TEXT_WIDTH);

  var maxTime = getMaxElement(times);

  ctx.fillStyle = '#000';
  for (var i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, ' + getRndInteger(1, 255) + ', 1)';
    }
    ctx.fillText(players[i], CLOUD_X + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT);
    ctx.fillRect(CLOUD_X + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - BAR_HEIGHT - TEXT_WIDTH, BAR_WIDTH, BAR_HEIGHT * times[i] / maxTime);
    ctx.fillText(Math.round(times[i]), CLOUD_X + (BAR_WIDTH + GAP) * i, BAR_WIDTH + GAP);
  }
};


