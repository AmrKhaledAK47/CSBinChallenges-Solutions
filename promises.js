// Challenge 1

function sayHello() {
  setTimeout(() => console.log('Hello!'), 1000);
}

// Uncomment the line below when ready
// sayHello(); // should log "Hello" after 1000ms


// Challenge 2
var promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve('Resolved!'), 1000);
});

// Should print out "Resolved!"
// promise.then((val) => console.log(val));


// Challenge 3

promise = new Promise(function(resolve, reject) {
  reject("Rejected!");
})

// Should print out "Reject!"
// promise.catch((val) => console.log(val));


// Challenge 4

promise = new Promise(function (resolve, reject) {
  resolve();
});

// Uncomment the lines below when ready
// promise.then(() => console.log('Promise has been resolved!'));
// console.log("I'm not the promise!");

// 1 - I'm not the promise!
// 2 - "Promise has been resolved!"

// Challenge 5
function delay(){
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  })
}

// Uncomment the code below to test
// This code should log "Hello" after 1000ms
// delay().then(sayHello);


// Challenge 6

var secondPromise = new Promise((resolve, reject) => {
  resolve("Second!");
})

var firstPromise = new Promise((resolve, reject) => {
  resolve(secondPromise);
})

// firstPromise.then()
//   .then((val) => console.log(val))


// Challenge 7
const fakePeople = [
  { name: 'Rudolph', hasPets: false, currentTemp: 98.6 },
  { name: 'Zebulon', hasPets: true, currentTemp: 22.6 },
  { name: 'Harold', hasPets: true, currentTemp: 98.3 },
]

const fakeAPICall = (i) => {
  const returnTime = Math.floor(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    if (i >= 0 && i < fakePeople.length) {
      setTimeout(() => resolve(fakePeople[i]), returnTime);
    } else {
      reject({ message: "index out of range" });
    }
  });
};

function getAllData() {
  return Promise.all([
    fakeAPICall(0),
    fakeAPICall(1),
    fakeAPICall(2)
  ])
}
// getAllData().then(val => console.log(val));
