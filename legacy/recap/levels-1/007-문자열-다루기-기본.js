// https://school.programmers.co.kr/learn/courses/30/lessons/12918

function solution(s) {
  if (!(s.length === 4 || s.length === 6)) {
    return false;
  }

  for (let i of s) {
    const ascCode = i.charCodeAt();

    if (48 > ascCode || ascCode > 57) {
      return false;
    }
  }

  return true;
}

// solution("a234");
// false
