// 문제 링크: https://jsalgo.co.kr/?page=7

// 1. 문제 설명
// [보석 중량 리스트(배열), 광차 중량] 형태의 2차원 배열을 입력 받음
// 보석 중량의 합이 중량이 되는 보석의 인덱스를 찾아 반환

// 2. 풀이 방법 설명
// for 문을 중첩해 투 포인터로 보석 중량 배열을 돌며 광차 중량과 비교해 해당 인덱스를 찾아 반환한다.

// 3. 구현 O(n^2)
// function solution(data) {
//   for (let i = 0; i < data[0].length; i++) {
//     for (let j = i + 1; j < data[0].length; j++) {
//       if (data[1] === data[0][i] + data[0][j]) {
//         return [i, j];
//       }
//     }
//   }
// }

// 개선 버전 O(n)
// 배열을 순회하면서 현재 값의 보완값(target - 현재 값)이
// 해시맵에 이미 존재하는지 확인한다.
// 존재하면 해당 인덱스와 현재 인덱스를 반환하고,
// 없으면 현재 값을 해시맵에 저장한다.

function solution(data) {
  const [weights, target] = data;
  const map = new Map();

  for (let i = 0; i < weights.length; i++) {
    const complement = target - weights[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(weights[i], i);
  }

  return null;
}

solution([[4, 9, 11, 2], 6]); // [0, 3]
