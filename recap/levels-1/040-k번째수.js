// https://school.programmers.co.kr/learn/courses/30/lessons/42748#

function solution(array, commands) {
  const answer = commands.reduce((acc, [i, j, k]) => {
    const slicedAndSorted = array.slice(i - 1, j).sort((a, b) => a - b);
    return [...acc, slicedAndSorted[k - 1]];
  }, []);

  return answer;
}

// solution(
//   [1, 5, 2, 6, 3, 7, 4],
//   [
//     [2, 5, 3],
//     [4, 4, 1],
//     [1, 7, 3],
//   ],
//   [5, 6, 3]
// );
// [ 5, 6, 3 ]
