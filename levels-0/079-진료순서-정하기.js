// https://school.programmers.co.kr/learn/courses/30/lessons/120835

function solution(emergency) {
  const emergencyMap = [...emergency]
    .sort((a, b) => b - a)
    .reduce((map, cur, idx) => map.set(cur, idx + 1), new Map());

  const answer = emergency.map((x) => emergencyMap.get(x));

  return answer;
}

// solution([3, 76, 24]);
// [ 3, 1, 2 ]
