// const sayHi = (name) => {
//   console.log('Hi Hello', name);
// }

// const doAction = (action) => {
//   action('Sanjay');// calling the action
// }

// doAction(sayHi);


// forEach

const arr = [1, 2, 3, 4, 5, 6];

// Both foreach accepts the callbackfn

// anonymous callback function
arr.forEach(function (val) {
  console.log(val);
});

// named callback function
function action(val) {
  console.log(val);
}

arr.forEach(action);


// Includes
// array of names
const ar2 = ['SAM', 'DIWAS', 'Balachandra', 'Gokul'];

// how will find whether name 'Gokul' is present or not
let flag = false;
for (const name of ar2) {
  if (name === 'Gokul') {
    flag = true;
  }
}

if (flag) {
  console.log('present');
} else {
  console.log('not present');
}

if (ar2.includes('Gokul')) {
  console.log('present');
} else {
  console.log('not present');
}


// indexOf
const names = ['Sanjay', 'Diwas', 'Bala', 'Gokul', 'Sanjay', 'Diwas'];

// find the index for the given name
console.log(names.indexOf('Sanjay'));
console.log(names.indexOf('Aswini'));

// lastIndexOf
console.log(names.lastIndexOf('Sanjay'));

// Map
const arr3 = ['Foot', 'Hand', 'Base', 'Volley'];

// create new array ['Football', 'Handball', 'Baseball', 'Volleyball'];

for (let i in arr3) {
  arr3[i] = arr3[i] + 'ball';
}

console.log('Array', arr3);

const newArr = arr3.map(function (val) {
  return val + 'ball';
})

console.log('Array', newArr);


// Filter: using to filter out the not needed values and keep only the needed values

const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Output: [2, 4, 6, 8]
console.log(arr4.filter((val) => val % 2 === 0));

// filter in array of objects
const employees = [
  {
    empName: 'John',
    age: 34,
    role: 'manager'
  },
  {
    empName: 'Doe',
    age: 45,
    role: 'helper'
  },
  {
    empName: 'Sam',
    age: 21,
    role: 'Developer'
  }
];

// filter all the employees whose age is above 30

// without destrcture
console.log(employees.filter(function (employee) {
  return employee.age > 30;
}))

// with destructure
console.log(employees.filter(function checkAge({ age }) {
  return age > 30;
}));

// find
// find the employee whose name John, should employee object not array
console.log(employees.find(function ({ empName }) {
  return empName === 'John';
}));






