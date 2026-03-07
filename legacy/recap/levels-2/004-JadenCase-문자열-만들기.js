// https://school.programmers.co.kr/learn/courses/30/lessons/12951

function solution(s) {
  const lowerString = s.toLowerCase();
  const answer = lowerString
    .split(" ")
    .map((x) => (x ? x[0].toUpperCase() + x.slice(1) : ""))
    .join(" ");

  return answer;
}

// solution("3people unFollowed me");
// 3people Unfollowed Me
