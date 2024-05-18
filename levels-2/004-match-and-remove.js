// https://school.programmers.co.kr/learn/courses/30/lessons/12973
// 짝지어 제거하기

// stack 이용

function matchAndRemove(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length !== 0 && stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0 ? 1 : 0;
}

// matchAndRemove("baabaa");
// 1
