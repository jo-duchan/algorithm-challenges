// https://school.programmers.co.kr/learn/courses/30/lessons/120907

function solution(quiz) {
  const calc = {
    "-": (x, y) => x - y,
    "+": (x, y) => x + y,
  };
  const answer = quiz.map((q) => {
    const [x, s, y, _, z] = q.split(" ");

    return calc[s](+x, +y) === +z ? "O" : "X";
  });

  return answer;
}

// solution(["3 - 4 = -3", "5 + 6 = 11"]);
// [ 'X', 'O' ]
