// https://school.programmers.co.kr/learn/courses/30/lessons/12917
// 문자열 내림차순으로 배치하기

function sortStringDescend(string) {
  const result = [...string].sort((a, b) => (a > b ? -1 : 1)).join("");
  return result;
}

// sortStringDescend("Zbcdefg");
// gfedcbZ
