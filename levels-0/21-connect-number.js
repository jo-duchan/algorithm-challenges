// 이어 붙인 수

function connectNumber(num_list) {
  const { oddStr, evenStr } = num_list.reduce(
    ({ oddStr, evenStr }, cur) => {
      cur % 2 === 0 ? (oddStr += cur.toString()) : (evenStr += cur.toString());

      return { oddStr, evenStr };
    },
    { oddStr: "", evenStr: "" }
  );

  return parseInt(oddStr) + parseInt(evenStr);
}

// connectNumber([3, 4, 5, 2, 1]);
// 393
