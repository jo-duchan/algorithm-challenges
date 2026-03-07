// https://school.programmers.co.kr/learn/courses/30/lessons/120907

function solution(quiz) {
  const calculator = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  };

  const answer = quiz.map((exp) => {
    const [left, op, right, , result] = exp.split(' ');
    return calculator[op](Number(left), Number(right)) === Number(result)
      ? 'O'
      : 'X';
  });

  return answer;
}

// solution(['3 - 4 = -3', '5 + 6 = 11']);
// ['X', 'O']
