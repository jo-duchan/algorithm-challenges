// https://school.programmers.co.kr/learn/courses/30/lessons/131127

function solution(want, number, discount) {
  let count = 0;
  const wantMap = want.reduce((map, item, index) => {
    return map.set(item, number[index]);
  }, new Map());

  while (discount.length > 9) {
    const temp = new Map(wantMap.entries());

    for (let i = 0; i < 10; i++) {
      if (temp.get(discount[i]) > 1) {
        temp.set(discount[i], temp.get(discount[i]) - 1);
      } else {
        temp.delete(discount[i]);
      }
    }

    if (temp.size === 0) {
      count++;
    }

    discount.shift();
  }

  return count;
}

// solution(
//   ["banana", "apple", "rice", "pork", "pot"],
//   [3, 2, 2, 2, 1],
//   [
//     "chicken",
//     "apple",
//     "apple",
//     "banana",
//     "rice",
//     "apple",
//     "pork",
//     "banana",
//     "pork",
//     "rice",
//     "pot",
//     "banana",
//     "apple",
//     "banana",
//   ]
// );
// 3

// solution(
//   ["banana", "apple", "rice", "pork", "pot"],
//   [3, 2, 2, 2, 1],
//   [
//     "apple",
//     "banana",
//     "rice",
//     "apple",
//     "pork",
//     "banana",
//     "pork",
//     "rice",
//     "pot",
//     "banana",
//     "apple",
//     "banana",
//     "chicken",
//     "apple",
//   ]
// );
// 3
