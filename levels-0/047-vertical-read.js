// 세로 읽기

function verticalRead(string, m, c) {
  const result = Array.from(string)
    .filter((_, i) => (i % m) + 1 === c)
    .join("");

  return result;
}

// verticalRead("ihrhbakrfpndopljhygc", 4, 2);
// happy
// verticalRead("programmers", 1, 1);
// programmers
