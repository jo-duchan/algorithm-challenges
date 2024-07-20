// https://school.programmers.co.kr/learn/courses/30/lessons/12953
// N개의 최소 공배수

// lcm = 최소 공배수, gcd,gcf = 최대 공약수
// * 적어도 하나가 0이 아닌 정수들의 최대 공약수를 구하는 문제를 풀 때는 GCD(Greatest Common Divisor)라는 용어를 사용하기도 합니다.

// 유클리드 호제법(Euclidean algorithm)을 활용해서 최대 공약수를 구함

// lcm = (a*b) / gcd(a,b)

function gcd(a, b) {
  while (b > 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function solution(arr) {
  let answer = 1;
  for (let num of arr) {
    answer = lcm(answer, num);
  }
  return answer;
}

// solution([2, 6, 8, 14]);
// 168
