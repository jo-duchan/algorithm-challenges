// https://school.programmers.co.kr/learn/courses/30/lessons/120861

const keyMap = {
  up: [0, 1],
  down: [0, -1],
  left: [-1, 0],
  right: [1, 0],
};

function solution(keyinput, board) {
  const limitX = Math.floor((board[0] - 1) / 2);
  const limitY = Math.floor((board[1] - 1) / 2);

  const answer = keyinput.reduce(
    (acc, cur) => {
      const [curX, curY] = acc;
      const [newX, newY] = keyMap[cur];

      const x = Math.max(Math.min(curX + newX, limitX), -limitX);
      const y = Math.max(Math.min(curY + newY, limitY), -limitY);

      return [x, y];
    },
    [0, 0]
  );

  return answer;
}

// solution(['left', 'right', 'up', 'right', 'right'], [11, 11]);
// [2, 1]
