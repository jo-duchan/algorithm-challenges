// https://school.programmers.co.kr/learn/courses/30/lessons/82612

function solution(price, money, count) {
  let sumPrice = 0;

  for (let i = 1; i <= count; i++) {
    sumPrice += price * i;
  }

  return sumPrice > money ? sumPrice - money : 0;
}

// solution(3, 20, 4);
// 10
