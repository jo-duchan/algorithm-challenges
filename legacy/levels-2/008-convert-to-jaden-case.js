// https://school.programmers.co.kr/learn/courses/30/lessons/12951
// JadenCase 문자열 만들기

function convertToJadenCase(s) {
  const JadenCaseArr = s
    .split(" ")
    .map((x) => (x ? x[0].toUpperCase() + x.slice(1).toLowerCase() : ""));

  return JadenCaseArr.join(" ");
}

// convertToJadenCase("3people unFollowed me");
// 3people UnFollowed Me
