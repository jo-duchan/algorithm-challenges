// https://school.programmers.co.kr/learn/courses/30/lessons/120861

function solution(keyinput, board) {
  const joyStick = {
    left: (cur) => [cur[0] - 1, cur[1]],
    right: (cur) => [cur[0] + 1, cur[1]],
    up: (cur) => [cur[0], cur[1] + 1],
    down: (cur) => [cur[0], cur[1] - 1],
  };
  const maxWidth = (board[0] - 1) / 2;
  const maxHight = (board[1] - 1) / 2;

  const answer = keyinput.reduce(
    (acc, cur) => {
      if (
        (cur === "left" && acc[0] > -maxWidth) ||
        (cur === "right" && acc[0] < maxWidth) ||
        (cur === "up" && acc[1] < maxHight) ||
        (cur === "down" && acc[1] > -maxHight)
      ) {
        return joyStick[cur](acc);
      }

      return acc;
    },
    [0, 0]
  );

  return answer;
}

// solution(["right", "right", "right", "right", "right", "left"], [9, 5]);
// [ 3, 0 ]
