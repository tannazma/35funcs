// Write your functions here, make sure to export them

function double1(first) {
  return first * 2;
}
function double2(number1, number2) {
  return number1 * 2;
}
function double3(number1, number2) {
  if (number1 > number2) {
    return number1 * 2
  } else {
    return number2 * 2
  }

}


module.exports = { double1, double2, double3 };

