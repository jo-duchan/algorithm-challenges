// https://school.programmers.co.kr/learn/courses/30/lessons/181838

function solution(date1, date2) {
  const getTimestamp = (obj) => new Date(obj).getTime();

  return getTimestamp(date1) < getTimestamp(date2) ? 1 : 0;
}

// solution([2021, 12, 28], [2021, 12, 29]);
// 1
