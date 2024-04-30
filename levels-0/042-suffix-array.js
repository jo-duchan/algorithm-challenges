// 접미사 배열

function suffixArray(string) {
  const result = [];
  for (let i = 0; i < string.length; i++) {
    result.push(string.slice(-i));
  }

  return result.sort();
}

// suffixArray("banana");
// [ 'a', 'ana', 'anana', 'banana', 'na', 'nana' ]
