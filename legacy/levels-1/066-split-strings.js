// https://school.programmers.co.kr/learn/courses/30/lessons/140108
// 문자열 나누기

function splitStrings(s, count = 0) {
  if (s.length === 0) return count;
  let x = s[0];
  let xCount = 0;
  let yCount = 0;

  for (let i = 0; i <= s.length; i++) {
    if (x === s[i]) xCount++;
    if (x !== s[i]) yCount++;

    if (xCount === yCount) {
      return splitStrings(s.slice(i + 1, s.length), ++count);
    }
  }

  return splitStrings("", ++count);
}

// splitStrings("aaabbaccccabba")
// 3
