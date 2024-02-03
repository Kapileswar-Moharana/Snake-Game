var direction = 'right',
  speed = 150,
  ticker = null,
  fruitCell = [],
  score = 0,
  size = 25;

var snakeCells = [
  [2, 6],
  [2, 5],
  [2, 4],
  [2, 3],
  [2, 2]
];
var snakeHead = [2, 6];

function renderSnake() {
  $('td').removeClass('snakeCell snakeHead');
  for (var cell in snakeCells) {
    var row = snakeCells[cell][0];
    var col = snakeCells[cell][1];
    $('tr').eq(row).find('td').eq(col).addClass('snakeCell');
  }
  var headRow = snakeHead[0];
  var headCol = snakeHead[1];
  $('tr').eq(headRow).find('td').eq(headCol).addClass('snakeHead');
}

function getFruitCell() {
  fruitCell = [getRandomNumber($('tr').length), getRandomNumber($('tr:eq(0)>td').length)];
}

function gameOver() {
  $('div.gameOver').fadeIn('slow', function () {
    $(this).animate({
      bottom: 20
    }, 'slow');
  });
  clearInterval(ticker);
}

function updateSnakeCell() {
  var snakeNewHead = [];
  switch (direction) {
    case 'right':
      snakeNewHead = [snakeHead[0], snakeHead[1] + 1];
      break;
    case 'left':
      snakeNewHead = [snakeHead[0], snakeHead[1] - 1];
      break;
    case 'up':
      snakeNewHead = [snakeHead[0] - 1, snakeHead[1]];
      break;
    case 'down':
      snakeNewHead = [snakeHead[0] + 1, snakeHead[1]];
      break;
  }

  if (snakeNewHead[0] < 0 || snakeNewHead[1] < 0 || snakeNewHead[0] >= size || snakeNewHead[1] >= size) {
    gameOver();
    return;
  }

  var newCell = $('tr').eq(snakeNewHead[0]).find('td').eq(snakeNewHead[1]);

  if (newCell.length == 0 || newCell.hasClass('snakeCell')) {
    gameOver();
  } else {
    if (newCell.hasClass('fruitCell')) {
      snakeCells.push([]);
      getFruitCell();
      renderFruitCell();
      score += 10;
      $('#scoreBoard').html('Your Score : ' + score);
      speed = speed - 2 > 50 ? speed - 2 : speed;
      clearInterval(ticker);
      startGame();
    }
    for (var i = snakeCells.length - 1; i > 0; i--) {
      snakeCells[i] = snakeCells[i - 1];
    }
    snakeCells[0] = snakeHead = snakeNewHead;
    renderSnake();
  }
}

function getRandomNumber(limit) {
  return parseInt(Math.random() * limit % limit);
}

function getNewDirection(keyCode) {
  var codes = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  if (codes[keyCode]) {
    var newDirection = codes[keyCode];
    var changeDirection = true;
    switch (direction) {
      case 'up':
        changeDirection = newDirection != 'down';
        break;
      case 'down':
        changeDirection = newDirection != 'up';
        break;
      case 'right':
        changeDirection = newDirection != 'left';
        break;
      case 'left':
        changeDirection = newDirection != 'right';
        break;
    }
    direction = changeDirection ? newDirection : direction;
  }
}

function renderBoard() {
  var rowhtml = '';
  for (var i = 0; i < size; i++) {
    rowhtml += '<td cellpadding="0" cellspacing="0"></td>';
  }
  var html = [];
  for (var i = 0; i < size; i++) {
    html.push('<tr cellpadding="0" cellspacing="0">' + rowhtml + '</tr>');
  }
  $(document.body).append('<table id="gamefield">' + html.join('\n') + '</table>');
  getFruitCell();
}

function renderFruitCell() {
  $('td').removeClass('fruitCell');
  var fruitRow = fruitCell[0];
  var fruitCol = fruitCell[1];
  $('tr').eq(fruitRow).find('td').eq(fruitCol).addClass('fruitCell');
}

function startGame() {
  ticker = setInterval(updateSnakeCell, speed);
}

$(document).ready(function () {
  renderBoard();
  renderFruitCell();
  $(document).on('keydown', function (e) {
    getNewDirection(e.keyCode);
  });
  startGame();
});
