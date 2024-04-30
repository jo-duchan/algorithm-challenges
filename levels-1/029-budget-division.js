// 예산 Summer/Winter Coding(~2018)

function budgetDivision(d, budget) {
  const result = d
    .sort((a, b) => a - b)
    .reduce((acc, cur) => acc + Number((budget -= cur) >= 0), 0);

  return result;
}

// budgetDivision([1, 3, 2, 5, 4], 9);
// 3
// budgetDivision([2, 2, 3, 3], 10);
// 4
