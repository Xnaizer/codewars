function howManydays(month) {
  let days = month;
  switch (days) {
    case 2:
      days = 28;
      break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
    case 11:
      days = 31;
      break;
    default:
      days = 30;
      break;
  }
  return days;
}

console.log(howManydays(1));
console.log(howManydays(2));
console.log(howManydays(3));
console.log(howManydays(4));
console.log(howManydays(12));
