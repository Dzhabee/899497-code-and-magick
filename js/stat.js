// 1. Проблема, что блоки выехали из облака
// 2. Столбики формируются сверху вниз
'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 120;
var CLOUD_Y = 270;
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

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 45);
  ctx.fillText('Список результатов:', 120, 65);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillText(players[i], CLOUD_X * i, CLOUD_Y);
      ctx.fillRect(CLOUD_X * i, CLOUD_X - TEXT_WIDTH, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
      ctx.fillText(Math.round(times[i]), CLOUD_X * i, 90);
    } else {
      // eslint-disable-next-line no-unused-expressions
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random(); ')';
      ctx.fillText(players[i], CLOUD_X * i, CLOUD_Y);
      ctx.fillRect(CLOUD_X * i, CLOUD_X - TEXT_WIDTH, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
      ctx.fillText(Math.round(times[i]), CLOUD_X * i, 90);
    }
  }


};
