// https://school.programmers.co.kr/learn/courses/30/lessons/138476
// 귤 고르기

function solution(k, tangerine) {
  let answer = 0;

  const tangerineBox = tangerine.reduce((map, size) => {
    const prev = map.get(size) || 0;
    return map.set(size, prev + 1);
  }, new Map());

  const sortedTangerineBox = Array.from(tangerineBox).sort(
    (a, b) => b[1] - a[1]
  );

  for (let tangerineNum of sortedTangerineBox) {
    if (k <= 0) {
      break;
    }

    k -= tangerineNum[1];
    answer++;
  }

  return answer;
}

// solution(2, [1, 1, 1, 1, 2, 2, 2, 3]);
// 1
