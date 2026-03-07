// https://school.programmers.co.kr/learn/courses/30/lessons/77484
// 로또의 최고 순위와 최저 순위

function solution(lottos, win_nums) {
  const count = [];
  const broken = [];
  const ranks = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
  };

  const myNumbersMap = win_nums.reduce((map, num) => {
    return map.set(num, num);
  }, new Map());

  for (let num of lottos) {
    if (num === 0) {
      broken.push(num);
      continue;
    }

    if (myNumbersMap.get(num)) {
      count.push(num);
      continue;
    }
  }

  return [ranks[count.length + broken.length] || 6, ranks[count.length] || 6];
}

// solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);
// [3, 5];
