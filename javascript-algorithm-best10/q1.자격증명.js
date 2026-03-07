// 문제 링크: https://jsalgo.co.kr/?page=1

// 1. 문제 설명
// '+', '-', ' ' 등의 조합의 문자를 담은 array를 입력을 받음.
// '+' = '1', '-' = '0'으로 변환
// 변환된 2진수를 10진수로 변환
// 10진수를 아스키 코드표 안의 문자로 변환 후 최종 출력

// 2. 풀이 방법 설명
// 우선 파라미터를 for문으로 순회를 하며 각 문자열에 접근을 한다.
// 각 문자열을 replace와 정규식을 활용해, 공백 제거 및 시그널에 맞게 1 또는 0으로 바꾼다.
// 그렇게 변환된 2진수를 parseInt를 통해 10진수로 바꾸고, fromCharCode를 통해 아스키 코드표에 맞는 문자열로 바꿔, result에 더한다.
// 마지막으로 result를 반환한다.

// 3. 구현
function solution(data) {
  let result = '';

  for (let i of data) {
    const binary = i.replace(/\s/g, '').replace(/-/g, '0').replace(/\+/g, '1');
    result += String.fromCharCode(parseInt(binary, 2));
  }

  return result;
}

solution([' + + - + -+-', ' ++--+-+ ', '++ -+ -+-', '+++- +-+']); // jeju
