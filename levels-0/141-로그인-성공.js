// https://school.programmers.co.kr/learn/courses/30/lessons/120883

function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const hashMap = new Map(db);

  if (hashMap.has(id)) {
    return hashMap.get(id) === pw ? "login" : "wrong pw";
  }

  return "fail";
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
