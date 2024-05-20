// https://school.programmers.co.kr/learn/courses/30/lessons/12922
// 수박수박수박수박수박수?

function repeatCharacters(n) {
  const characters = ["수", "박"];
  let result = "";

  for (let i = 0; i < n; i++) {
    result += characters[i % characters.length];
  }

  return result;
}

// repeatCharacters(4);
// 수박수박
