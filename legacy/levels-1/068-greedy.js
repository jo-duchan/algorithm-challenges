// https://school.programmers.co.kr/learn/courses/30/lessons/42862
// 체육복

function solution(n, lost, reserve) {
  const result = [];
  const lostMap = lost.reduce((map, num) => {
    return map.set(num, num);
  }, new Map());

  const reserveMap = reserve.reduce((map, num) => {
    return map.set(num, num);
  }, new Map());

  for (let i = 1; i <= n; i++) {
    const lost = lostMap.get(i);
    const afterNumber = i - 1;
    const beforeNumber = i + 1;

    if (!lost) {
      result.push(i);
      continue;
    }

    if (reserveMap.get(i)) {
      result.push(i);
      continue;
    }

    if (reserveMap.get(afterNumber) && !lostMap.get(afterNumber)) {
      result.push(i);
      reserveMap.delete(afterNumber);
      continue;
    }

    if (reserveMap.get(beforeNumber) && !lostMap.get(beforeNumber)) {
      result.push(i);
      reserveMap.delete(beforeNumber);
      continue;
    }
  }

  return result.length;
}

// solution(7, [2, 4, 7], [1, 3, 5]);
// 6
// solution(4, [2, 3], [3, 4]);
// 3
