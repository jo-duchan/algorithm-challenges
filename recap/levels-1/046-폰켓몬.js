// https://chatgpt.com/?model=gpt-4o&temporary-chat=true

function solution(nums) {
  const limit = nums.length / 2;
  const kinds = new Set();

  for (let num of nums) {
    kinds.add(num);
    if (kinds.size === limit) break;
  }

  return kinds.size;
}

// solution([3, 1, 2, 3]);
// 2
