'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_RENDER = 100;
var CLOUD_X = 140;
var GAP_CLOUD = 10;
var GAP = 50;
var TEXT_GAP = 20;
var HISTOGRAM_WIDTH = 40;
var HISTOGRAM_HEIGHT = 150;
var TEXT_COLOR = '#000';

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
  ctx.fillStyle = TEXT_COLOR;
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X - TEXT_GAP, HISTOGRAM_WIDTH);
  ctx.fillText('Список результатов:', CLOUD_X - TEXT_GAP, HISTOGRAM_WIDTH + TEXT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(players[i], CLOUD_X + (HISTOGRAM_WIDTH + GAP) * i, CLOUD_HEIGHT);
    ctx.fillText(Math.round(times[i]), CLOUD_X + (HISTOGRAM_WIDTH + GAP) * i, CLOUD_HEIGHT - (HISTOGRAM_HEIGHT * times[i] / maxTime) - GAP + TEXT_GAP);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, ' + getRndInteger(1, 255) + ')';
    }
    ctx.fillRect(CLOUD_X + (HISTOGRAM_WIDTH + GAP) * i, CLOUD_HEIGHT - (HISTOGRAM_HEIGHT * times[i] / maxTime) - TEXT_GAP, HISTOGRAM_WIDTH, HISTOGRAM_HEIGHT * times[i] / maxTime);
  }
};


