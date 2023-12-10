// const getCelsius = (fTemp) => { 
//    return (fTemp - 32) * 5/9
//  };


const getCelsius = fTemp => (fTemp - 32) * 5/9

console.log(`It is ${Math.round(getCelsius(3))}\xB0C outside!`)

const minMax = (numArray) => { 
   let min = Math.min(...numArray)
   let max = Math.max(...numArray)
   return {min, max}
 };

 console.log(minMax([1,2,3,4,5,6,7,8,9]));


// (function () {
//    let length = 10;
//    let width = 5;
//    console.log(`The area of a rectangle with the length of ${length} and the width of ${width} is ${length * width}`);
// })();


((length, width) => {

   console.log(`The area of a rectangle with the length of ${length} and the width of ${width} is ${length * width}`);
})(3, 10);
