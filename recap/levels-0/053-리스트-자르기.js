// https://school.programmers.co.kr/learn/courses/30/lessons/181897

function solution(n, slicer, num_list) {
  const [a, b, c] = slicer;
  const calculator = {
    1: num_list.slice(0, b + 1),
    2: num_list.slice(a),
    3: num_list.slice(a, b + 1),
    4: num_list.slice(a, b + 1).filter((_, i) => i % c === 0),
  };

  return calculator[n];
}

// solution(4, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9]);
// [2, 4, 6]
