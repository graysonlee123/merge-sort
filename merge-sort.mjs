import { shuffleArray } from './utils.mjs'

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const shuffledArray = shuffleArray(array)

console.log(shuffledArray, '\n\nShuffling...')

function mergeSort(array) {
  const length = array.length

  // Test for arrays with a length of 1 or 2.

  if (length === 1) {
    return array
  } else if (length === 2) {
    if (array[0] <= array[1]) {
      return array
    }

    return [array[1], array[0]]
  }

  // Split the array.
  const middleIndex = Math.floor(array.length / 2)
  const firstHalf = array.slice(0, middleIndex)
  const secondHalf = array.slice(middleIndex, length)

  // Sort the arrays.
  const arrayOne = mergeSort(firstHalf)
  const arrayTwo = mergeSort(secondHalf)

  // Create a merged array.
  const merged = []

  // While either of the two arrays have any elements...
  while (arrayOne.length || arrayTwo.length) {
    // Check to see if one of the arrays is empty.

    // If arrayOne is empty, we can assume that arrayTwo isn't.
    if (!arrayOne.length) {
      merged.push(arrayTwo.shift())

      // Skip to the next iteration of the while loop.
      continue
    }

    // If arrayTwo is empty, we can assume that arrayOne isn't.
    if (!arrayTwo.length) {
      merged.push(arrayOne.shift())

      // Skip to the next iteration of the while loop.
      continue
    }

    // If neither array is empty, decide how to sort the items.
    if (arrayOne[0] <= arrayTwo[0]) {
      merged.push(arrayOne.shift())
    } else {
      merged.push(arrayTwo.shift())
    }
  }

  return merged
}

const sortedArray = mergeSort(shuffledArray)

console.log('Sorted:', sortedArray)
