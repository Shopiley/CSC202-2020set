
import log, {appName, dummyFunction, weatherTag} from './tools.js';

/* 
 log(weatherTag`The temperature is ${25} degrees centigrade. The day is `);
*/ 
//Output Tagged template 

//Let us still maintain the last log statement so that we can illustrate better how the asynchronous call that returns after the timeout does not stop the main execution thread. 
/*
new Promise((resolve, reject) => { 
    setTimeout(()=>{ 
    resolve("Timeout is over"); //send out a success feedback with data using resolve 
    }, 1000) //set timeout for 1000ms i.e. 1second. 
    }).then((data) => { 
    log(`Successful: ${data}`);//This should output "Timeout is over" 
    }).catch((error) => {//This will only be reached it the asynchronous function returned a reject statement. 
      log(`Error message received: ${error}`); 
    }); 

log("Welcome! The application name is " + appName + ". There is a function that returns " + dummyFunction() );
*/
const a_promise = new Promise((resolve, reject) => {setTimeout(() => {myFunction, 1000})} )

function myFunction(){
   if (userInput > 5){
      resolve("Rating received")
   }
   else{
      reject("Error")
   }

   return Promise.resolve()
}

a_promise.then(
   function(value) {myFunction(value)},
   function(error) {myFunction(error)}
)



   /*
import fetch from 'node-fetch';

const url = 'https://jsonplaceholder.typicode.com/users/1'; //Get data for a user with id 1 
fetch(url)      //fetch is an in-built asynchronous function
 .then(response => response.json()) //convert data returned to json 
 .then(data => log(`Data: Id = ${data.id}, Name = ${data.name}, Email = ${data.email}`)) //use the json data 
 .catch(error => log(`Error: ${error}`)); 
*/





/*
 //write aynchronous function named mysetTimeOut that will receive millisec argument and return a promise
 
const mysetTimeOut = (milliseconds) => {
return new Promise((resolve, reject) => { 
    if (!milliseconds) reject("Milliseconds is required")
    setTimeout(()=>{ 
    resolve(`Timeout is over. I timed out for ${milliseconds} ms`) //send out a success feedback with data using resolve 
    }, milliseconds)
 })
}
 
mysetTimeOut()
.then((data)=>{log(data) })
.catch((error)=>{log(`Error found: ${error}`) })
*/



//map function in iterables
/*

const addressees = ["John doe", "Mary Smart", "Paul Umoh"];
addressees.map(addressee => {
   const message = `Dear ${addressee}, It is my pleasure to inform you that your admission letter is ready for collection`;
   logger(message);
});
*/


//write a function called mail merger that can take the list of addressees 
//and the mail body to be sent to the addressees as arguments
/*
const mailmerger = ["John doe", "Mary Smart", "Paul Umoh"];
const message = `Dear ${addressees}, It is my pleasure to inform you that your admission letter is ready for collection`;

mailmerger.map((addressees, message) => {
   logger(message);
});
*/