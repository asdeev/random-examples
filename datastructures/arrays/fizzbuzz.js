function fizzbuzz(nums) {
  for (const i of nums) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Fizz Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

const start = [1, 3, 4, 5, 6, 15, 45];

fizzbuzz(start);
