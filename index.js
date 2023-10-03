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
function maxStr(string1, string2) {
  const len1 = string1.length
  const len2 = string2.length
  if (len1 >= len2) {
    return string1;
  } else {
    return string2
  }
}

function even(number) {
  if (number % 2 === 0) {
    return true
  } else {
    return false
  }
}

function evenBelow(number) {
  let finishedArray = []
  for (let i = 0; i < number; i++) {
    if (i % 2 === 0) {
      finishedArray.push(i)
    }
   
  }
  return finishedArray
}
function evenIn(...array) {
  finishedArray = []
  array.forEach(function (number) {
    if (number % 2 === 0) {
      finishedArray.push(number)
    }
  })
  return finishedArray
}
function multiplyArray(...args) {
  if (args.length === 0) return 0;
  let result = 1;
  for (let i = 0; i < args.length; i++) {
    result = result * args[i];
    if (args.length === 1) {
      return args
    }
  }
  return result;
}
module.exports = {
  double1, double2, double3, repeat,
  batman, max, maxDivide, maxStr,
  even, evenIn, multiplyArray, evenBelow
};
