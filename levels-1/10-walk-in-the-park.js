// 공원 산책

function walkInThePark(park, routes) {
  const maxRow = park.length;
  const maxCol = park[0].length;

  let row = park.findIndex((x) => x.includes("S"));
  let col = park[row].indexOf("S");

  for (let route of routes) {
    const [direction, gap] = route.split(" ");

    switch (direction) {
      case "N": {
        const to = row - +gap;
        if (to < 0) continue;
        for (let i = row; i >= to; i--) {
          if ((park[i]?.[col] ?? "X") === "X") break;
          if (to === i) row = to;
        }
        break;
      }

      case "E": {
        const to = col + +gap;
        if (to >= maxCol) continue;

        for (let i = col; i <= to; i++) {
          if ((park[row]?.[i] ?? "X") === "X") break;
          if (to === i) col = to;
        }
        break;
      }

      case "S": {
        const to = row + +gap;
        console.log(row, +gap);
        if (to >= maxRow) continue;
        for (let i = row; i <= to; i++) {
          if ((park[i]?.[col] ?? "X") === "X") break;
          if (to === i) row = to;
        }
        break;
      }

      case "W": {
        const to = col - +gap;
        if (to < 0) continue;
        for (let i = col; i >= to; i--) {
          if ((park[row]?.[i] ?? "X") === "X") break;
          if (to === i) col = to;
        }
        break;
      }
    }
  }

  return [row, col];
}

// walkInThePark(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"]);
// [0,0]
// walkInThePark(["OOSOX", "OOOOO", "OOOOO"], ["E 1"]);
// [0, 3]
// walkInThePark(["OOO", "OSO", "OOO", "OOO"], ["N 2", "S 2"]);
// [3, 1]
// walkInThePark(["OXX", "XSO", "XOO"], ["E 1", "S 1"]);
// [2, 2]
