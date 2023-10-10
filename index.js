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
function divideArray(...array) {
  if (array.includes(0)) {
    return 0
  }
  if (array.length === 1) {
    return array
  }
  let total = array[0]
  for (let i = 1; i < array.length; i++) {
    total = total / array[i]
  }
  return total
}
function splitCombine(string1, string2) {
  const lengthHalfString1 = string1.length / 2
  const lengthHalfString2 = string2.length / 2
  const half1of1 = string1.slice(0, lengthHalfString1)
  const half2of1 = string1.slice(lengthHalfString1)
  const half1of2 = string2.slice(0, lengthHalfString2)
  const half2of2 = string2.slice(lengthHalfString2)
  const combination1 = half1of1 + half2of2;
  const combination2 = half1of2 + half2of1;
  if (combination1.length >= combination2.length) {
    return combination1;
  } else {
    return combination2;
  }
  // const arr = [half1of1, half2of2, half2of1, half1of2]
  // const arrLength = arr.length
  // let combinationArr = []
  // for (let i = 0; i < arrLength; i++) {
  //   for (let j = i + 1; j < arrLength; j++) {
  //     combinationArr.push(arr[i] + arr[j]);
  //   }
  // }
  // return combinationArr;
}
function getName(object) {
  return object.name;
}
function getNames(array) {
  const completeArr = []
  for (let i = 0; i < array.length; i++) {
    completeArr.push(array[i].name)
  }
  return completeArr
}
function combineName(...arr) {
  const completeArr = []
  for (let i = 0; i < arr.length; i++) {
    completeArr.push(arr[i].firstname + " " + arr[i].lastname)
  }
  return completeArr
}
function uniqueCountries(...arr) {
  completedArr = []
  for (let i = 0; i < arr.length; i++) {
    if (!completedArr.includes(arr[i].country)) {
      completedArr.push(arr[i].country)
    }
  }
  return completedArr
}
function countCountries(...arr) {
  completedObj = {}
  for (let i = 0; i < arr.length; i++) {
    if (!completedObj[arr[i].country]) {
      completedObj[arr[i].country] = 1
    } else if ((completedObj[arr[i].country])) {
      completedObj[arr[i].country] += 1
    }
  }
  return completedObj
}
function highestNumber(...arrayOfNumber) {
  return Math.max(...arrayOfNumber)
}

function average(...arrayOfNumber) {
  let sum = 0;
  console.log(arrayOfNumber)
  arrayOfNumber.forEach((num) => { sum += num });
  return (sum / arrayOfNumber.length);
}

module.exports = {
  double1, double2, double3, repeat,
  batman, max, maxDivide, maxStr,
  even, evenIn, multiplyArray, evenBelow,
  divideArray, splitCombine, getName,
  getNames, combineName, uniqueCountries,
  countCountries, highestNumber, average
};
