// 수 조작하기 1

function numberControl1(n, control) {
  let result = n;
  [...control].map((str) => {
    switch (str) {
      case "w":
        result += 1;
        return;
      case "s":
        result -= 1;
        return;
      case "d":
        result += 10;
        return;
      case "a":
        result -= 10;
        return;
    }
  });

  return result;
}

// numberControl1(0, "wsdawsdassw");
// -1
