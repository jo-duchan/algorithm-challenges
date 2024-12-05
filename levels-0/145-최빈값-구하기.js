// https://school.programmers.co.kr/learn/courses/30/lessons/120812

function solution(array) {
  const countMap = array.reduce(
    (map, cur) => map.set(cur, (map.get(cur) || 0) + 1),
    new Map()
  );
  const sortCountMap = Array.from(countMap).sort((a, b) => b[1] - a[1]);

  if (sortCountMap[0][1] === sortCountMap?.[1]?.[1]) {
    return -1;
  }

  return sortCountMap[0][0];
}

solution([1, 2, 3, 3, 3, 4]);
// 3
