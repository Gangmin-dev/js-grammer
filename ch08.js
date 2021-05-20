// control flow statment

// label statement

foo: {
  console.log(1);
  break foo;
  console.log(2);
}

console.log("Done");

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i + j === 3) break outer;
    console.log(`inner [${i}, ${j}]`);
  }
}

console.log("Done");
