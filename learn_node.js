// To start Node project command
// npm init

// Here index.js is the entry point of the project which is define in package.json
// github code

// We have gitignore generater in market
// In package.json we are adding "type": "module" we want to use ES6 or module technique not requeir(common js)

// Here we use Nodemon for live server because without this we run server again and again
// This is dev dependency means we only use in development not in production
// npm i nodemon -D

// utils folder is for utility functions or helper functions

// prettier package is for formatting our code


// connect database 
// require dotenv package to read .env file
// mongoose, express packages are used to connect database
// IIFE ()() On the topic of function expressions and syntax, what does an immediately invoked function expression

// Two important points about database connectivity: 

// 1. When connecting to databases, handling potential data-not-found scenarios is essential. Employ try/catch blocks or promises to manage errors or we can also use promises.

// key to remember : ( wrap in try-catch )

// 2. Database operations involve latency, and traditional synchronous code can lead to blocking, where the program waits for the database query to complete before moving on. So, we should async/await which allows for non-blocking execution, enabling the program to continue with other tasks while waiting for the database response. 

// key to remember :  ( always remember the database is in another continent, so use async await)


// cookie-parser, cors
// mongoose-aggregate-paginate-v2

// Please read mongose Aggregation Pipeline

// bcrypt or bcrypt.js
// jwt (jsonwebtoken) package

// File Upload package express-fileupload
// multer package
// Here we are using cloudinary for image hosting


// HTTP vs HTTPS (Hyper Text Transfer Protocol)
// URL = uniform resource locator
// URI =  uniform resource indentifier
// URN = uniform resource name
