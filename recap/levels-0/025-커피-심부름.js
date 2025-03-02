// https://school.programmers.co.kr/learn/courses/30/lessons/181837

function solution(order) {
  const answer = order.reduce(
    (acc, coffee) => (acc += coffee.includes('latte') ? 5000 : 4500),
    0
  );
  return answer;
}

// solution(['cafelatte', 'americanoice', 'hotcafelatte', 'anything']);
// 19000
