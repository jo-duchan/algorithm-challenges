// 코드 처리하기

function processCode(code) {
  let ret = "";
  let mode = 0;

  for (let i = 0; i < code.length; i++) {
    if (code[i] === "1") {
      mode = mode === 1 ? 0 : 1;
    }
    if (code[i] !== "1" && i % 2 === mode) {
      ret += code[i];
    }
  }

  return ret === "" ? "EMPTY" : ret;
}

// processCode("abc1abc1abc");
// acbac
