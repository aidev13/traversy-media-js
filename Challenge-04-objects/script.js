// Step 1
// Create an array of objects called library. Add 3 objects with a property of title, author, status. Title and author should be strings (whatever value you want) and status should be another object with the properties of own, reading and read. Which should all be boolean values. For all status, set own to true and reading and read to false.
let x;

const library = [
   {
      title: 'Bible',
      author: 'God',
      status: {
         own: true,
         reading: false,
         read: false
      }
   },
   {
      title: 'To kill a mockingbird',
      author: 'JK Roll',
      status: {
         own: true,
         reading: false,
         read: false
      }
   }, {
      title: 'A Christmas Story',
      author: 'Your Mom',
      status: {
         own: true,
         reading: false,
         read: false
      }
   }
]

// Step 2
// You finished reading all of the books. Set the read value for all of them to true. Do not edit the initial object. Set the values using dot notation.

library[0].status.read = true
library[1].status.read = true
library[2].status.read = true

// Step 3
// Destructure the title from the first book and rename the variable to firstBook

const { title: firstBook } = library[0]

console.log(firstBook)

// Step 4
// Turn the library object into a JSON string

const libraryString = JSON.stringify(library)

console.log(libraryString)

console.log