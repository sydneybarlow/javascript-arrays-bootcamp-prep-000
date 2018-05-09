var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array,element) {
   array.unshift(element)
   return array
}

function addElementToEndOfArray(array,element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array,element) {
  array.push(element)
  return array
}

function accessElementInArray(array,element) {
  return array[element]
}

function destructivelyRemoveElementFromBeginningOfArray(array,element) {
  array.shift(element)
  return array
}

function removeElementFromBeginningOfArray(array,element) {
  array.shift(0)
}

function destructivelyRemoveElementFromEndOfArray (array,element) {
  array.pop()
  return array
}

function removeElementFromEndOfArray (array,element) {
  array.slice(0, array.length - element)
}

