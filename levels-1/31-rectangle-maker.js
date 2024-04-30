// 직사각형 별찍기

function rectangleMaker(a, b) {
  const row = "*".repeat(a);
  [...Array(b)].forEach((_) => console.log(row));
}

// rectangleMaker(5, 3);
// *****
// *****
// *****
