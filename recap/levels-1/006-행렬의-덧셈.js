// https://school.programmers.co.kr/learn/courses/30/lessons/12950

function solution(arr1, arr2) {
  const answer = [];

  for (let i = 0; i < arr1.length; i++) {
    const temp = [];
    for (let j = 0; j < arr1[i].length; j++) {
      temp.push(arr1[i][j] + arr2[i][j]);
    }

    answer.push(temp);
  }
  return answer;
}

// solution(
//   [
//     [1, 2],
//     [2, 3],
//   ],
//   [
//     [3, 4],
//     [5, 6],
//   ]
// );
// [ [ 4, 6 ], [ 7, 9 ] ]
