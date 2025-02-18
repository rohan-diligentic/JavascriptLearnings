console.log("\n11. Given an array of numbers, return the product of all the numbers in the array.")
const array1 = [11, 1, 12, 3, 2, 8, 3, 8, 1, 1];

//solution 1
function ques1Solution1(arr) {
  if (arr.length <= 0) {
    console.log("Invalid array")
    return;
  }
  const result = arr.reduce((acc, item) => {
    return acc * item;
  })
  return result;
}

//solution 2
function ques1Solution2(arr, index, product) {
  if (index === arr.length) {
    return product;
  }

  return arr[index] * ques1Solution2(arr, index + 1, product);

}
//solution 3
function ques1Solution3(arr) {

  if (arr.length <= 0) {
    return ("Invalid array")
  }

  let product = 1;
  for (const element of arr) {
    product = product * element;
  }

  return product;

}

console.log(ques1Solution3(array1))


console.log("\n12. Write a function that returns an array with all values squared.")
//solution 1
function ques2Solution1(arr) {
  const result = arr.reduce((acc, item) => {
    acc.push(item * item)
    return acc;
  }, [])
  return result;
}
//solution 2
function ques2Solution2(arr) {
  const result = arr.map((item) => item * item)
  return result;
}
//solution 3
function ques2Solution3(arr) {
  const result = []
  for (const element of arr) {
    result.push(element * element)
  }
  return result;
}
console.log(ques2Solution3(array1))


console.log("\n13. Write a function that removes all instances of a specified value from an array.")
//solution 1
function ques3Solution1(arr, element) {
  const result = arr.filter((item) => {
    if (item != element) {
      return item;
    }
  })
  return result;
}
//solution 2
function ques3Solution2(arr, element) {
  const result = arr.reduce((acc, item) => {
    if (item != element) {
      acc.push(item)
    }
    return acc;
  }, [])
  return result;
}
//solution 3
function ques3Solution3(arr, element) {
  const result = arr.map((item) => {
    if (item !== element) {
      console.log(item)
    }
  })
}
ques3Solution3(array1, 8)


console.log("\n14. Write a function that checks if two arrays are equal (same elements in the same order).")
const a1 = [1, 2, 4, 5, 1, 8, 2]
const a2 = [1, 4, 2, 5, 6, 7, 8]
console.log(JSON.stringify(a1) === JSON.stringify(a2))

console.log("\n15. Given an array of numbers, return the first number that is divisible by 3.")
//solution 1
function ques5Solution1(arr) {

  return arr.find((item) => {
    return (item % 3 === 0);
  })
}
//solution 2
function ques5Solution2(arr) {

  return arr.reduce((acc, item) => {
    if (item % 3 === 0) {
      return acc + item;
    }
    return acc;
  }, 0)
}

console.log(ques5Solution1(array1))

console.log("\n16. Create a function to get the common elements between two arrays.")
//solution 1
function ques6Solution1(arr1, arr2) {

  if (arr1.length <= 0 || arr2.length <= 0) {
    return "No common elements"
  }

  const commonArray = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        if (!commonArray.includes(arr1[i])) {
          commonArray.push(arr1[i])
        }
      }
    }
  }

  return commonArray;
}

//solution 2
function ques6Solution2(arr1, arr2) {
  if (arr1.length <= 0 || arr2.length <= 0) {
    return "No common elements"
  }
  const result = arr1.filter((item) => arr2.includes(item))
  return result;
}

//solution 3
function ques6Solution3(arr1, arr2) {
  if (arr1.length <= 0 || arr2.length <= 0) {
    return "No common elements"
  }
  const result = arr1.filter((item) => arr2.includes(item))
  return result;
}
console.log(ques6Solution2(a1, a2))