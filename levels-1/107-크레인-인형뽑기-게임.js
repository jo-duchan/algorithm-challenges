// https://school.programmers.co.kr/learn/courses/30/lessons/64061
// 2019 카카오 개발자 겨울 인턴십

function solution(board, moves) {
  let answer = 0;
  const basket = [];
  const stack = [];
  const getDoll = (num) => {
    let temp = 0;
    for (let i = 0; i < board.length; i++) {
      if (board[i][num] > 0) {
        temp = board[i][num];
        board[i][num] = 0;
        return temp;
      }
    }

    return 0;
  };

  for (let i of moves) {
    let doll = getDoll(i - 1);
    if (doll > 0) {
      basket.push(doll);
    }
  }

  for (let i of basket) {
    if (stack.at(-1) === i) {
      answer += 2;
      stack.pop(i);
    } else {
      stack.push(i);
    }
  }

  return answer;
}

// solution(
//   [
//     [0, 0, 0, 0, 0],
//     [0, 0, 1, 0, 3],
//     [0, 2, 5, 0, 1],
//     [4, 2, 4, 4, 2],
//     [3, 5, 1, 3, 1],
//   ],
//   [1, 5, 3, 5, 1, 2, 1, 4]
// );
// 4

// solution(
//   [
//     [0, 0, 0, 0],
//     [0, 0, 0, 0],
//     [0, 4, 4, 0],
//     [1, 2, 2, 1],
//   ],
//   [2, 3, 1, 4, 2, 3]
// );
// 6
