// qr code

function qrcode(q, r, code) {
  const result = Array.from(code).reduce((acc, cur, idx) => {
    return idx % q === r ? acc + cur : acc;
  }, "");

  return result;
}

// qrcode(3, 1, "qjnwezgrpirldywt");
// jerry
