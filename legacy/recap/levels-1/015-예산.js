// https://school.programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
  const sortedList = d.sort((a, b) => a - b);

  for (let i = 0; i <= sortedList.length; i++) {
    if (budget >= sortedList[i]) {
      budget -= sortedList[i];
      continue;
    }

    return i;
  }
}

// solution([1, 3, 2, 5, 4], 9);
// 3
