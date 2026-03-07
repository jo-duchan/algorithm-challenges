// https://school.programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
  const numbers = `${x}`.split('');
  const sumNumber = numbers.reduce((acc, cur) => acc + parseInt(cur), 0);

  return x % sumNumber === 0;
}

// solution(10);
// true
