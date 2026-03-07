// https://school.programmers.co.kr/learn/courses/30/lessons/134240

function solution(food) {
  const foodHalfList = food.reduce((acc, cur, idx) => {
    if (idx === 0) return acc;
    const repeat = Math.floor(cur / 2);

    return [...acc, ...new Array(repeat).fill(idx)];
  }, []);

  return `${foodHalfList.join("")}0${foodHalfList.reverse().join("")}`;
}

// solution([1, 3, 4, 6]);
// 1223330333221
