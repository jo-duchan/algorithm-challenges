// 조건 문자열

function conditionString(ineq, eq, n, m) {
  switch (ineq + eq) {
    case ">=":
      return n >= m ? 1 : 0;
    case "<=":
      return n <= m ? 1 : 0;
    case ">!":
      return n > m ? 1 : 0;
    case "<!":
      return n < m ? 1 : 0;
  }
}

// conditionString("<", "=", 20, 50);
// 1
// conditionString(">", "!", 41, 78);
// 0
