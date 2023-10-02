// Write your functions here, make sure to export them

function double1(first) {
  return first * 2;
}
function double2(number1, number2) {
  return number1 * 2;
}
function double3(number1, number2) {
  return Math.max(number1, number2) * 2

}
function repeat(string, number) {
  if (number > 0) {
    let result = ""
    for (let i = 0; i < number; i++) {
      result += string
    }
    return result
  } else if (number < 0) {
    return ""
  }
}
function batman() {
  return repeat('na', 10) + ' batman'
}

function max(number1, number2) {
  return Math.max(number1, number2)
}
function maxDivide(number1, number2) {
  return Math.min(number1, number2) / Math.max(number1, number2)
}
function maxStr(string1,string2){

}

module.exports = { double1, double2, double3, repeat, batman, max, maxDivide };

