// https://school.programmers.co.kr/learn/courses/30/lessons/181921

// BFS(너비 우선 탐색)활용
function solution(l, r) {
  const answer = [];
  const queue = ['5'];

  while (queue.length > 0) {
    const current = queue.shift();
    const num = Number(current);

    if (num > r) continue;
    if (num >= l) result.push(num);

    queue.push(current + '0');
    queue.push(current + '5');
  }

  return answer.length > 0 ? result : [-1];
}

// solution(5, 555);
// [5, 50, 55, 500, 505, 550, 555]
