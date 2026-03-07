// https://school.programmers.co.kr/learn/courses/30/lessons/120842

function solution(num_list, n) {
  var answer = num_list.reduce((acc, cur, idx) => {
    let arrIndex = Math.floor(idx / n);

    if (!acc[arrIndex]) {
      acc.push([]);
    }

    acc[arrIndex].push(cur);

    return acc;
  }, []);

  return answer;
}

// solution([100, 95, 2, 4, 5, 6, 18, 33, 948], 3);
// [ [ 100, 95, 2 ], [ 4, 5, 6 ], [ 18, 33, 948 ] ]
