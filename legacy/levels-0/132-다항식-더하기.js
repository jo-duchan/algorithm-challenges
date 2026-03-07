// https://school.programmers.co.kr/learn/courses/30/lessons/120863

function solution(polynomial) {
  let xCoeff = 0;
  let constant = 0;

  const terms = polynomial.split(" + ");

  for (let term of terms) {
    if (term.includes("x")) {
      const coefficient = term === "x" ? 1 : Number(term.replace("x", ""));
      xCoeff += coefficient;
    } else {
      constant += Number(term);
    }
  }

  const xValue = xCoeff === 1 ? "x" : `${xCoeff}x`;

  if (!constant) {
    return xValue;
  }

  if (!xCoeff) {
    return `${constant}`;
  }

  return `${xValue} + ${constant}`;
}

// solution("x + 1");
// "x + 1"
