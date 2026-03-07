// 카드 뭉치

function bunchOfCards(cards1, cards2, goal) {
  let idx1 = 0;
  let idx2 = 0;
  let result = "Yes";

  goal.forEach((card) => {
    if (card === cards1[idx1]) {
      idx1++;
      return;
    }

    if (card === cards2[idx2]) {
      idx2++;
      return;
    }

    result = "No";
  });

  return result;
}

// bunchOfCards(
//   ["i", "drink", "water"],
//   ["want", "to"],
//   ["i", "want", "to", "drink", "water"]
// );
// Yes
