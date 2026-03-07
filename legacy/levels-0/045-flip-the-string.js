// 문자열 뒤집기

function flipTheString(string, s, e) {
  const arry = Array.from(string);
  const flipString = arry.slice(s, e + 1).reverse();
  arry.splice(s, flipString.length, ...flipString);

  return arry.join("");
}

// flipTheString("Progra21Sremm3", 6, 12);
// ProgrammerS123
