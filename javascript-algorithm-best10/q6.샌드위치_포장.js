// 문제 링크: https://jsalgo.co.kr/?page=6

// 1. 문제 설명
// 숫자를 담은 배열을 입력 받아, 1, 2, 3, 4, 1의 순서를 만족하는 갯수를 세어 반환한다.
// 오로지 완성된 샌드위치만 입력 배열에서 빠질 수 있다.

// 2. 풀이 방법 설명
// pattern, count, stack 변수를 선언하고,
// for 문으로 data 배열을 순회하며,
// stack에 데이터를 누적하면서 마지막 5개의 값이 패턴(12341)과 일치하는지 확인한다.
// 일치할 경우 count를 증가시키고 해당 패턴을 stack에서 제거하여 이미 사용된 값은 다시 사용하지 않도록 한다.

// 마지막으로 count를 반환한다.

// // 3. 구현
function solution(data) {
  const pattern = '12341';
  let count = 0;
  let stack = [];

  for (let i of data) {
    stack.push(i);
    const temp = stack.slice(-5).join('');
    if (temp === pattern) {
      count++;
      stack = stack.slice(0, -5);
    }
  }

  return count;
}

solution([3, 1, 1, 2, 3, 4, 1, 2, 3, 4, 1]); // 2
