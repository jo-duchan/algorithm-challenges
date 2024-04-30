// 리스트 자르기

function listSlicer(n, slicer, num_list) {
  const [a, b, c] = slicer;

  switch (n) {
    case 1:
      return num_list.slice(0, b + 1);
    case 2:
      return num_list.slice(a);
    case 3:
      return num_list.slice(a, b + 1);
    case 4:
      return num_list.slice(a, b + 1).filter((_, idx) => !(idx % c));
  }
}

// listSlicer(3, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9]);
// [ 2, 3, 4, 5, 6 ]
// listSlicer(4, [2, 7, 3], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
// [ 2, 5 ]
