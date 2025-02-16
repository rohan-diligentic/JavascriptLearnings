console.log(`\n1.You are given an array of numbers and strings. Return an array with only numbers.`)
const array1 = [1, 2, 4, 'apple', 5, 'banana', 'pear', null, 0, undefined];
//solution 1
function ques1solution1(arr) {
  arr.filter((item) => {
    if (typeof item === 'number') {
      console.log(item)
    }
  })

}

//solution 2
function ques1solution2(arr) {
  const data = arr.reduce((acc, currentVal) => {
    if (typeof currentVal === 'number') {
      acc.push(currentVal)
    }
    return acc;
  }, [])

  return data;
}

console.log(ques1solution2(array1))


console.log(`\n2.Given an array with truthy and falsy values, remove all the falsy values.`)
//solution 1
function ques2Solution1(arr) {
  arr.filter((item) => {
    if (item) {
      console.log(item)
    }
  })
}
//solution 2
function ques2Solution2(arr) {
  const data = arr.reduce((acc, item) => {
    if (item) {
      acc.push(item)
    }
    return acc;
  }, [])
  return data;
}
//solution 3
function ques2Solution3(arr) {
  const data = arr.map((item) => {

  })
}
console.log(ques2Solution2(array1))


console.log(`\n3. Given an array of numbers, return the array with all duplicate values removed.`)
const duplicateArray = [1, 2, 1, 3, 12, 44, 2, 44, 'a', 'a', 'b', 'b'];
//solution 1
function ques3Solution1(arr) {
  const newArray = [];
  arr.map((item) => {
    if (!newArray.includes(item)) {
      newArray.push(item)
    }
  })

  return newArray;
}

//solution 2
function ques3Solution2(arr) {
  const removeDuplicate = [...new Set(duplicateArray)];
  console.log(removeDuplicate)
}

//solution 3
function ques3Solution3(arr) {
  const removeDuplicate = arr.reduce((acc, currentVal) => {
    if (!acc.includes(currentVal)) {
      acc.push(currentVal)
    }
    return acc;
  }, [])

  return removeDuplicate;
}
console.log(ques3Solution3(duplicateArray))


console.log(`\n4.You are given an array of strings, return the array sorted in reverse alphabetical order.`)
const strArray = ['zebra', 'apples', 'cricket', 'donkey', 'pineapple']
//solution 1
function ques4solution1(arr) {
  const array = [...arr].sort((a, b) => {
    // Compare strings in reverse order
    return b.localeCompare(a); // reversed order using localeCompare
  });
  return array; // Return the sorted array
}

console.log(ques4solution1(strArray));


console.log(`\n5. Write a function that finds the index of a number in a given array. If the number does not exist, return -1.`)
function ques5solution1(arr, element) {
  if (arr.includes(element)) {
    console.log(arr.indexOf(element))
  } else {
    console.log(element + " not present")
  }
}
ques5solution1(array1, 'per')


console.log("\n6. Create a function that removes all negative numbers from an array of numbers.")
const array2 = [11, 3, -5, 2, -7, -10, 21, 6];
//solution 1
function ques6solution1(arr) {
  const result = arr.filter((item) => item > 0)
  return result;
}

//solution 2
function ques6solution2(arr) {
  const result = arr.reduce((acc, item) => {
    if (item > 0) {
      acc.push(item)
    }
    return acc;
  }, [])
  return result;
}

console.log(ques6solution2(array2))


console.log("\n7.Given an array of objects representing people (with properties name and age), return an array of names of people who are 28 or older.")
const personArray = [
  { name: 'Ram', age: 25 },
  { name: 'Rakesh', age: 19 },
  { name: 'Yash', age: 35 },
  { name: 'Pushpa', age: 29 },
  { name: 'Ridhima', age: 25 },
]

//solution 1
function ques7solution1(arr) {
  const result = arr.filter((item) => {
    if (item.age >= 28) {
      return item;
    }
  })
  return result;
}

//solution 2
function ques7solution2(arr) {
  const result = arr.reduce((acc, item) => {
    if (item.age >= 28) {
      acc.push(item)
    }
    return acc;
  }, [])
  return result;
}

//solution 3
function ques7solution3(arr) {
  arr.forEach((item) => {
    if (item.age >= 28) {
      console.log(item)
    }
  })
}

console.log(ques7solution2(personArray))


console.log("\n8.Write a function to reverse the order of elements in an array.")
function ques8solution1(arr) {
  return arr.reverse();      //actual array modified
  // return [...arr].reverse();
}
console.log(ques8solution1(array2))
console.log(array2)

console.log("\n9. Given an array of strings, return the longest string.")
//solution 1
function ques9solution1(arr) {
  let longestString = '';
  const result = arr.filter((item) => {
    if (item.length > longestString.length) {
      longestString = item;
    }
  })

  return longestString;
}

//solution 2
function ques9solution2(arr) {
  let longestString = '';
  const result = arr.reduce((acc, item) => {
    if (item.length > longestString.length) {
      longestString = item;
    }
  })

  return longestString;
}
//solution 3
function ques9solution3(arr) {
  let longestString = '';
  const result = arr.find((item) => {
    if (item.length > longestString.length) {
      longestString = item;
    }
  })

  return longestString;
}

console.log(ques9solution3(strArray))


console.log("\n10.You are given an array of numbers, return the sum of all even numbers.")
//solution 1
function ques10solution1(arr) {
  let sum = 0;
  arr.forEach((item) => {
    if (item % 2 === 0) {
      sum = sum + item;
    }
  })
  return sum;
}

//solution 2
function ques10solution2(arr) {
  let sum = 0;
  for (const element of arr) {
    if (element % 2 === 0) {
      sum = sum + element;
    }
  }
  return sum;
}

//solution 3
function ques10solution3(arr) {
  let sum = 0;
  arr.reduce((acc, item) => {
    if (item % 2 === 0) {
      sum = item + sum;
    }
  })
  return sum;
}

//solution 4
function ques10solution4(arr) {
  let sum = 0;
  arr.filter((item) => {
    if (item % 2 === 0) {
      sum = item + sum;
    }
  })
  return sum;
}

console.log(ques10solution4(duplicateArray))