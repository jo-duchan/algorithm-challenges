// 최소 직사각형

function minimumRectangle(sizes) {
  let maxSize = [0, 0];
  const rotated = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));

  rotated.forEach(([w, h]) => {
    if (w > maxSize[0]) maxSize[0] = w;
    if (h > maxSize[1]) maxSize[1] = h;
  });

  return maxSize[0] * maxSize[1];
}

// minimumRectangle([
//   [20, 10],
//   [12, 18],
// ]);
// 240
