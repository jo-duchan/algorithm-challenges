// 덧칠하기

function paintOver(n, m, section) {
  let rePainting = 0;
  const arr = Array(n).fill(1);

  section.forEach((x) => (arr[x - 1] = 0));

  arr.forEach((x, i) => {
    if (x === 0) {
      arr.fill(1, i, i + m);
      rePainting++;
    }
  });

  return rePainting;
}
// paintOver(8, 4, [2, 3, 6]);
// 2;
// paintOver(5, 4, [1, 3]);
// 1
// paintOver(6, 1, [1, 3, 5]);
// 3
