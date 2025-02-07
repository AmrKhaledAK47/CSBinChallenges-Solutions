// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');

// CHALLENGE 1

function sumFunc(arr) {
  let sum = 0;
  for(let el of arr){
    sum += el;
  }
  return sum;
}

// Uncomment the lines below to test your work
// const array = [1, 2, 3, 4];
// console.log(sumFunc(array)); // -> should log 10

function returnIterator(arr) {
  let idx = 0;
  return () => {
    return arr[idx++];
  }
}

// Uncomment the lines below to test your work
// const array2 = ['a', 'b', 'c', 'd'];
// const myIterator = returnIterator(array2);
// console.log(myIterator()); // -> should log 'a'
// console.log(myIterator()); // -> should log 'b'
// console.log(myIterator()); // -> should log 'c'
// console.log(myIterator()); // -> should log 'd'



// CHALLENGE 2

function nextIterator(arr) {
  let idx = 0; 
  return {
    next : () => {
      return arr[idx++];
    }
  }
} 

// Uncomment the lines below to test your work
// const array3 = [1, 2, 3];
// const iteratorWithNext = nextIterator(array3);
// console.log(iteratorWithNext.next()); // -> should log 1
// console.log(iteratorWithNext.next()); // -> should log 2
// console.log(iteratorWithNext.next()); // -> should log 3



// CHALLENGE 3

function sumArray(arr) {
  let sum = 0;
  let it = nextIterator(arr);
  let el = it.next();
  while(el){
    sum += el;
    el = it.next();
  }
  return sum;
}

// Uncomment the lines below to test your work
// const array4 = [1, 2, 3, 4];
// console.log(sumArray(array4)); // -> should log 10



// CHALLENGE 4

function setIterator(set) {
  let values = set.values();
  return {
    next : () => values.next().value
  }
}

// Uncomment the lines below to test your work
// const mySet = new Set('hey');
// const iterateSet = setIterator(mySet);
// console.log(iterateSet.next()); // -> should log 'h'
// console.log(iterateSet.next()); // -> should log 'e'
// console.log(iterateSet.next()); // -> should log 'y'



// CHALLENGE 5

function indexIterator(arr) {
   let idx = 0; 
  return {
    next : () => {
      return [idx, arr[idx++]];
    }
  }
}

// Uncomment the lines below to test your work
// const array5 = ['a', 'b', 'c', 'd'];
// const iteratorWithIndex = indexIterator(array5);
// console.log(iteratorWithIndex.next()); // -> should log [0, 'a']
// console.log(iteratorWithIndex.next()); // -> should log [1, 'b']
// console.log(iteratorWithIndex.next()); // -> should log [2, 'c']



// CHALLENGE 6

function Words(string) {
  this.str = string;
}

Words.prototype[Symbol.iterator] = function() {
  let arr = this.str.split(' ');
  let idx = 0
  return {
    next : () => {
      if(idx < arr.length) return { done: false, value: arr[idx++] };
      else return { done: true};
    }
  }
}

// Uncomment the lines below to test your work
// const helloWorld = new Words('Hello World');
// for (let word of helloWorld) { console.log(word); } // -> should log 'Hello' and 'World'

// CHALLENGE 7

function valueAndPrevIndex(array){
   let idx = 0; 
  return {
    sentence : () => {
      if(idx) return `${array[idx]} was found after index ${(idx++)-1}`;
      else return `${array[idx++]} is the first element`;
    }
  }
}

// const returnedSentence = valueAndPrevIndex([4,5,6])
// console.log(returnedSentence.sentence());
// console.log(returnedSentence.sentence());
// console.log(returnedSentence.sentence());


//CHALLENGE 8

function* createConversation(string) {
  yield setInterval(() => {
    if(string === 'english') console.log("hello there");
    else console.log("gibberish");
  }, 3000);
}

// console.log(createConversation('english').next());



//CHALLENGE 9
function waitForVerb(noun) {
  return new Promise ((resolve, reject) => {
    setTimeout(() => resolve(noun), 3000);
  })
}

async function f(noun) {
  const verb = await waitForVerb("feed");
  console.log( verb + ' ' + noun);
}

f("dog");

