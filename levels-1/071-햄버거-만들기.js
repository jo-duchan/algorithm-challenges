// https://school.programmers.co.kr/learn/courses/30/lessons/133502

function solution(ingredient) {
  const stack = [];
  let count = 0;

  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);

    // 최근 4개가 1, 2, 3, 1이면 패턴이 완성됨
    if (
      stack.length >= 4 &&
      stack[stack.length - 4] === 1 &&
      stack[stack.length - 3] === 2 &&
      stack[stack.length - 2] === 3 &&
      stack[stack.length - 1] === 1
    ) {
      // 패턴을 발견했으니 스택에서 제거하고 카운트 증가
      stack.splice(-4);
      count++;
    }
  }

  return count;
}

// solution([2, 1, 1, 2, 3, 1, 2, 3, 1]);
// 2
