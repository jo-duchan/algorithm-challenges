// https://school.programmers.co.kr/learn/courses/30/lessons/12918
// 문자열 다루기 기본

function stringHandleBasic(s) {
  if (s.length !== 4 && s.length !== 6) return false;
  const stringArr = [...s].filter((x) => x.charCodeAt() > 57);

  return stringArr.length === 0;
}

// stringHandleBasic("a234");
// false
