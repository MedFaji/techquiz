export const data = [
  {
    id: "0",
    question: "What is the difference between JavaScript and Java?",
    answer:
      "JavaScript is a scripting language primarily used for web development, while Java is a general-purpose programming language.",
    variants: ["JavaScript", "Java", "Both"],
  },
  {
    id: "1",
    question: "What is the purpose of a CSS preprocessor?",
    answer:
      "A CSS preprocessor is a scripting language that extends CSS and allows you to write more maintainable and efficient CSS code.",
    variants: ["Sass", "Less", "Stylus"],
  },
  {
    id: "2",
    question: "What is the difference between Git and GitHub?",
    answer:
      "Git is a distributed version control system, while GitHub is a web-based platform that provides hosting for Git repositories.",
    variants: ["Git", "GitHub", "Both"],
  },
  {
    id: "3",
    question: "What is the purpose of a package manager?",
    answer:
      "A package manager is a tool that helps manage dependencies and facilitates the installation, update, and removal of software packages.",
    variants: ["npm", "Yarn", "Both"],
  },
  {
    id: "4",
    question:
      "What is the difference between var, let, and const in JavaScript?",
    answer:
      "var is function-scoped, let is block-scoped, and const is also block-scoped but its value cannot be reassigned once defined.",
    variants: ["var", "let", "const"],
  },
  {
    id: "5",
    question:
      "What is the purpose of the 'use strict' directive in JavaScript?",
    answer:
      "The 'use strict' directive enables strict mode, which enforces stricter parsing and error handling in JavaScript, helping to catch common mistakes and improve code quality.",
    variants: ["Enforce strict mode", "Enable ECMAScript 6 features", "Both"],
  },
  {
    id: "6",
    question:
      "What is the difference between synchronous and asynchronous programming?",
    answer:
      "Synchronous programming executes tasks in a sequential order, while asynchronous programming allows tasks to be executed concurrently, improving performance and responsiveness.",
    variants: ["Synchronous", "Asynchronous", "Both"],
  },
  {
    id: "7",
    question: "What is the purpose of a callback function in JavaScript?",
    answer:
      "A callback function is a function that is passed as an argument to another function and is invoked after a certain task or event occurs. It allows for asynchronous operations and helps manage control flow.",
    variants: [
      "Handle asynchronous operations",
      "Implement event-driven programming",
      "Both",
    ],
  },
  {
    id: "8",
    question: "What is the difference between == and === in JavaScript?",
    answer:
      "== is a loose equality operator that performs type coercion, while === is a strict equality operator that checks both value and type.",
    variants: ["==", "===", "Both"],
  },
  {
    id: "9",
    question: "What is the purpose of the document object in the browser?",
    answer:
      "The document object represents the HTML document loaded in the browser and provides methods and properties to manipulate and interact with the document's content.",
    variants: [
      "Manipulate HTML elements",
      "Access and modify document content",
      "Both",
    ],
  },
  {
    id: "10",
    question: "What is the purpose of the spread operator (...) in JavaScript?",
    answer:
      "The spread operator allows an iterable (e.g., an array or string) to be expanded into individual elements. It is commonly used for array manipulation, function arguments, and object cloning.",
    variants: ["Expand arrays", "Pass multiple arguments", "Both"],
  },
  {
    id: "11",
    question: "What is the purpose of a promise in JavaScript?",
    answer:
      "A promise is an object that represents the eventual completion or failure of an asynchronous operation. It allows for better handling of asynchronous code and avoids callback hell.",
    variants: [
      "Handle asynchronous operations",
      "Chain multiple asynchronous operations",
      "Both",
    ],
  },
  {
    id: "12",
    question:
      "What is the difference between a function declaration and a function expression in JavaScript?",
    answer:
      "A function declaration is hoisted and can be called before it is defined, while a function expression is not hoisted and must be defined before it is called.",
    variants: ["Function declaration", "Function expression", "Both"],
  },
  {
    id: "13",
    question: "What is the purpose of the arrow function syntax in JavaScript?",
    answer:
      "Arrow functions provide a concise syntax for writing anonymous functions and lexically bind the 'this' value, making it easier to work with functions in JavaScript.",
    variants: [
      "Write concise anonymous functions",
      "Lexical 'this' binding",
      "Both",
    ],
  },
  {
    id: "14",
    question: "What is the purpose of the 'this' keyword in JavaScript?",
    answer:
      "The 'this' keyword refers to the object that is currently executing the code. It allows access to object properties and methods within the context of the executing code.",
    variants: ["Access object properties", "Invoke object methods", "Both"],
  },
  {
    id: "15",
    question: "What is the purpose of the 'new' keyword in JavaScript?",
    answer:
      "The 'new' keyword is used to create an instance of an object constructor or class. It allocates memory for the object and sets up a reference to its prototype.",
    variants: [
      "Create object instances",
      "Allocate memory for objects",
      "Both",
    ],
  },
  {
    id: "16",
    question: "What is the purpose of a template literal in JavaScript?",
    answer:
      "A template literal is a string literal that allows for embedded expressions and multiline strings. It provides a more concise and flexible way to create strings in JavaScript.",
    variants: [
      "Embed expressions in strings",
      "Create multiline strings",
      "Both",
    ],
  },
  {
    id: "17",
    question:
      "What is the difference between a shallow copy and a deep copy in JavaScript?",
    answer:
      "A shallow copy creates a new object that references the original object's properties, while a deep copy creates a new object with its own copies of all nested objects and their properties.",
    variants: ["Shallow copy", "Deep copy", "Both"],
  },
  {
    id: "18",
    question: "What is the purpose of the map() method in JavaScript?",
    answer:
      "The map() method creates a new array by applying a provided function to each element of an existing array. It allows for easy transformation and manipulation of array elements.",
    variants: [
      "Transform array elements",
      "Apply a function to each element",
      "Both",
    ],
  },
  {
    id: "19",
    question: "What is the purpose of the filter() method in JavaScript?",
    answer:
      "The filter() method creates a new array with all elements that pass a provided test. It allows for easy filtering and selection of array elements based on specific criteria.",
    variants: ["Filter array elements", "Test array elements", "Both"],
  },
  {
    id: "20",
    question: "What is the purpose of the reduce() method in JavaScript?",
    answer:
      "The reduce() method applies a provided function to each element of an array and reduces it to a single value. It allows for easy aggregation and computation of array elements.",
    variants: ["Aggregate array elements", "Compute a single value", "Both"],
  },
  {
    id: "21",
    question: "What is the purpose of the async/await syntax in JavaScript?",
    answer:
      "The async/await syntax provides a more readable and synchronous-like way to write asynchronous code in JavaScript. It allows for better error handling and control flow.",
    variants: ["Write asynchronous code", "Handle promises", "Both"],
  },
  {
    id: "22",
    question: "What is the purpose of the fetch() function in JavaScript?",
    answer:
      "The fetch() function is used to make HTTP requests and retrieve resources from a server. It provides a modern and flexible way to work with APIs and handle network requests.",
    variants: ["Make HTTP requests", "Retrieve data from a server", "Both"],
  },
  {
    id: "23",
    question: "What is the purpose of the localStorage object in JavaScript?",
    answer:
      "The localStorage object allows you to store key-value pairs in the browser's local storage. It provides a simple and persistent way to store data on the client-side.",
    variants: ["Store data locally", "Persist data across sessions", "Both"],
  },
  {
    id: "24",
    question: "What is the purpose of the try...catch statement in JavaScript?",
    answer:
      "The try...catch statement is used to catch and handle exceptions in JavaScript. It allows for graceful error handling and prevents the program from crashing.",
    variants: [
      "Catch and handle exceptions",
      "Prevent program crashes",
      "Both",
    ],
  },
  {
    id: "25",
    question:
      "What is the purpose of the setInterval() function in JavaScript?",
    answer:
      "The setInterval() function is used to repeatedly execute a function or code snippet at a specified interval. It is commonly used for creating timers and animations.",
    variants: ["Execute code at regular intervals", "Create timers", "Both"],
  },
  {
    id: "26",
    question:
      "What is the purpose of the JSON.stringify() function in JavaScript?",
    answer:
      "The JSON.stringify() function is used to convert a JavaScript object or value to a JSON string. It is commonly used for data serialization and communication with APIs.",
    variants: ["Convert object to JSON string", "Serialize data", "Both"],
  },
  {
    id: "27",
    question: "What is the purpose of the JSON.parse() function in JavaScript?",
    answer:
      "The JSON.parse() function is used to parse a JSON string and convert it into a JavaScript object or value. It is commonly used for deserialization and processing JSON data.",
    variants: ["Parse JSON string to object", "Deserialize data", "Both"],
  },
  {
    id: "28",
    question:
      "What is the purpose of the Array.isArray() function in JavaScript?",
    answer:
      "The Array.isArray() function is used to check if a value is an array. It returns true if the value is an array, and false otherwise.",
    variants: ["Check if value is an array", "Validate array type", "Both"],
  },
  {
    id: "29",
    question:
      "What is the purpose of the Object.keys() function in JavaScript?",
    answer:
      "The Object.keys() function is used to retrieve an array of the enumerable property names of an object. It is commonly used for iterating over object properties.",
    variants: [
      "Get object property names",
      "Iterate over object properties",
      "Both",
    ],
  },
  {
    id: "30",
    question:
      "What is the purpose of the Math.random() function in JavaScript?",
    answer:
      "The Math.random() function is used to generate a random floating-point number between 0 and 1. It is commonly used for generating random values and simulations.",
    variants: ["Generate random numbers", "Simulate randomness", "Both"],
  },
  {
    id: "31",
    question: "What is the purpose of the async keyword in JavaScript?",
    answer:
      "The async keyword is used to define an asynchronous function, which allows for the use of the await keyword inside the function. It simplifies working with promises and makes asynchronous code more readable and maintainable.",
    variants: [
      "Define asynchronous functions",
      "Use the await keyword",
      "Both",
    ],
  },
  {
    id: "32",
    question: "What is the purpose of the await keyword in JavaScript?",
    answer:
      "The await keyword is used to pause the execution of an asynchronous function until a promise is resolved or rejected. It allows for writing asynchronous code that looks and behaves like synchronous code.",
    variants: [
      "Pause function execution",
      "Wait for promise resolution",
      "Both",
    ],
  },
  {
    id: "33",
    question:
      "What is the purpose of the try...finally statement in JavaScript?",
    answer:
      "The try...finally statement is used to define a block of code that will be executed regardless of whether an exception is thrown or not. It allows for cleanup operations and resource management.",
    variants: [
      "Execute code regardless of exceptions",
      "Perform cleanup operations",
      "Both",
    ],
  },
  {
    id: "34",
    question:
      "What is the purpose of the Object.create() method in JavaScript?",
    answer:
      "The Object.create() method is used to create a new object with a specified prototype object and properties. It provides a way to implement inheritance and object composition in JavaScript.",
    variants: [
      "Create objects with specific prototypes",
      "Implement inheritance",
      "Both",
    ],
  },
  {
    id: "35",
    question:
      "What is the purpose of the Object.assign() method in JavaScript?",
    answer:
      "The Object.assign() method is used to copy the values of all enumerable properties from one or more source objects to a target object. It allows for object merging and cloning.",
    variants: ["Copy object properties", "Merge objects", "Both"],
  },
  {
    id: "36",
    question: "What is the purpose of the Array.from() method in JavaScript?",
    answer:
      "The Array.from() method is used to create a new array from an array-like or iterable object. It provides a way to convert other data structures into arrays.",
    variants: [
      "Create arrays from iterable objects",
      "Convert array-like objects to arrays",
      "Both",
    ],
  },
  {
    id: "37",
    question: "What is the purpose of the Array.of() method in JavaScript?",
    answer:
      "The Array.of() method is used to create a new array with the specified elements as its elements. It provides a way to create arrays with a variable number of arguments.",
    variants: [
      "Create arrays with specified elements",
      "Accept variable number of arguments",
      "Both",
    ],
  },
  {
    id: "38",
    question:
      "What is the purpose of the Array.prototype.forEach() method in JavaScript?",
    answer:
      "The Array.prototype.forEach() method is used to execute a provided function once for each array element. It allows for easy iteration and side-effect operations on array elements.",
    variants: [
      "Iterate over array elements",
      "Perform side-effect operations",
      "Both",
    ],
  },
  {
    id: "39",
    question:
      "What is the purpose of the Array.prototype.map() method in JavaScript?",
    answer:
      "The Array.prototype.map() method is used to create a new array with the results of calling a provided function on every element in the calling array. It allows for easy transformation and mapping of array elements.",
    variants: [
      "Transform array elements",
      "Apply a function to each element",
      "Both",
    ],
  },
  {
    id: "40",
    question:
      "What is the purpose of the Array.prototype.filter() method in JavaScript?",
    answer:
      "The Array.prototype.filter() method is used to create a new array with all elements that pass a provided test. It allows for easy filtering and selection of array elements based on specific criteria.",
    variants: ["Filter array elements", "Test array elements", "Both"],
  },
  {
    id: "41",
    question:
      "What is the purpose of the Array.prototype.reduce() method in JavaScript?",
    answer:
      "The Array.prototype.reduce() method is used to apply a provided function to each element of an array and reduce it to a single value. It allows for easy aggregation and computation of array elements.",
    variants: ["Aggregate array elements", "Compute a single value", "Both"],
  },
  {
    id: "42",
    question:
      "What is the purpose of the Array.prototype.every() method in JavaScript?",
    answer:
      "The Array.prototype.every() method is used to test whether all elements in the array pass a provided test. It returns true if all elements pass the test, and false otherwise.",
    variants: [
      "Test if all elements pass a condition",
      "Check array element properties",
      "Both",
    ],
  },
  {
    id: "43",
    question:
      "What is the purpose of the Array.prototype.some() method in JavaScript?",
    answer:
      "The Array.prototype.some() method is used to test whether at least one element in the array passes a provided test. It returns true if at least one element passes the test, and false otherwise.",
    variants: [
      "Test if any element passes a condition",
      "Check array element properties",
      "Both",
    ],
  },
  {
    id: "44",
    question:
      "What is the purpose of the Array.prototype.find() method in JavaScript?",
    answer:
      "The Array.prototype.find() method is used to return the first element in the array that satisfies a provided test function. It allows for easy searching and retrieval of array elements.",
    variants: [
      "Find first element that satisfies a condition",
      "Search array for specific elements",
      "Both",
    ],
  },
  {
    id: "45",
    question:
      "What is the purpose of the Array.prototype.findIndex() method in JavaScript?",
    answer:
      "The Array.prototype.findIndex() method is used to return the index of the first element in the array that satisfies a provided test function. It allows for easy searching and retrieval of array indices.",
    variants: [
      "Find index of first element that satisfies a condition",
      "Search array for specific indices",
      "Both",
    ],
  },
  {
    id: "46",
    question:
      "What is the purpose of the Array.prototype.includes() method in JavaScript?",
    answer:
      "The Array.prototype.includes() method is used to check if an array includes a certain element. It returns true if the element is found, and false otherwise.",
    variants: [
      "Check if array includes an element",
      "Search array for specific elements",
      "Both",
    ],
  },
  {
    id: "47",
    question:
      "What is the purpose of the Array.prototype.sort() method in JavaScript?",
    answer:
      "The Array.prototype.sort() method is used to sort the elements of an array in place and return the sorted array. It allows for easy sorting of array elements based on specific criteria.",
    variants: ["Sort array elements", "Order array elements", "Both"],
  },
  {
    id: "48",
    question:
      "What is the purpose of the Array.prototype.reverse() method in JavaScript?",
    answer:
      "The Array.prototype.reverse() method is used to reverse the order of the elements in an array in place. It allows for easy reversal of array elements.",
    variants: ["Reverse array elements", "Change array element order", "Both"],
  },
  {
    id: "49",
    question:
      "What is the purpose of the Array.prototype.join() method in JavaScript?",
    answer:
      "The Array.prototype.join() method is used to join all elements of an array into a string. It allows for easy concatenation of array elements with a specified separator.",
    variants: [
      "Join array elements into a string",
      "Concatenate array elements",
      "Both",
    ],
  },
];
