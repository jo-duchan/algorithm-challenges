// 5명씩

function fivePeopleEach(names) {
  const result = [];

  for (let i = 0; i < names.length; i += 5) {
    result.push(names[i]);
  }

  return result;
}

// fivePeopleEach(["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"]);
// ["nami", "vex"];
