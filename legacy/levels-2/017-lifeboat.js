// https://school.programmers.co.kr/learn/courses/30/lessons/42885
// 구명보트

// 탐욕 알고리즘 (Greedy Algorithm)을 사용한 이진 탐색
function solution(people, limit) {
  // 정렬
  people = people.sort((a, b) => a - b);

  let rescued = 0;
  let start = 0;
  let last = people.length - 1;

  while (start <= last) {
    if (people[start] + people[last] <= limit) {
      start++;
    }

    last--;
    rescued++;
  }

  return rescued;
}

// solution([20, 60, 70, 80, 30], 100);
// 3
