// for(let i = 1; i <= 100; i++) {

//    console.log(i);
// }

//Fizz
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}

//Bizz
// for (let i = 1; i <= 100; i++) {
//   if (i % 5 === 0) {
//     console.log('Bizz');
//   } else {
//     console.log(i);
//   }
// }

//FizzBizz
// for(let i = 1; i <= 100; i++) {
//  if(i % 15 === 0) {
//    console.log("FizzBizz");
//  } else {
//     console.log(i);
//  };
// }


// for (let i = 1; i <= 100; i++) {
//    i % 3 === 0 ? console.log('Fizz'): console.log(i);
// };

// for (let i = 1; i <= 100; i++) {
//    i % 5 === 0 ? console.log('Bizz'): console.log(i);
// };

for(let i = 1; i <= 100; i++) {
   i % 15 === 0 ? console.log('FizzBizz'): console.log(i);
};