// https://school.programmers.co.kr/learn/courses/30/lessons/120883

function solution(id_pw, db) {
  const dbHash = new Map(db);
  const [id, pw] = id_pw;

  if (!dbHash.has(id)) {
    return "fail";
  }

  if (dbHash.get(id) !== pw) {
    return "wrong pw";
  }

  return "login";
}

// solution(
//   ["meosseugi", "1234"],
//   [
//     ["rardss", "123"],
//     ["yyoom", "1234"],
//     ["meosseugi", "1234"],
//   ]
// );
// login
