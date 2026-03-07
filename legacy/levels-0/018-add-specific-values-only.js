// 등차수열의 특정한 항만 더하기

function addSpecificValuesOnly(a, d, included) {
  let result = 0;
  let ap = [];

  included.map((bool, index) => {
    ap.push(a);
    a += d;

    if (bool) {
      result += ap[index];
    }
  });

  return result;
}

// addSpecificValuesOnly(3, 4, [true, false, false, true, true]);
// 37
// addSpecificValuesOnly(7, 1, [false, false, false, true, false, false, false]);
// 10
