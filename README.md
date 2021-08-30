# es6_import_export_and_modules
Created with [CodeSandbox](https://codesandbox.io/)      
Notes from React module    
[The Complete 2021 Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/)  
Instructor: Dr. Angela Yu      

## Description
This app renders un Unordered List with 3 items.
* the value π stored as "pi" with the value 3.1416 
* The double value of "pi" generated using JS maths operations
* The tripe value of "pi" generated using JS maths operations

This project was helpful to understand how import/export functionality and the concept of modules work.

## Notes

Import & Export and the concept of modules       
allows us to splitting up our large Javascript files into individual more manageable components.       
And this is  what the React Components are leveraging from. 

From math.js we export our code.     
This is how math.js becomes a new module      
and we can export whatever it is that we want to be used elsewhere from this file.    
The code will be imported to index.js and we can now use it inside our code.    

#### Import as default

We can specify a single export as default.      
When I'm importing something that is the default,         
I can actually name it whatever I want.      
eg: in index.js, change (ALL) "pi" to "pie" and as long as I updated my code to be consistent with the name I've given in the import,  it will works.       

#### export multiple things
in addition to creating a default export,      
We can write another export statement with a set of curly braces      
and inside these curly braces you can define all of the non-default exports,  
```
export default pi;
export {doublePi , TriplePi};
```

To be able to import in our file:
```
import pi, {doublePi , TriplePi} from "./math";
```
First the default and then the additional imports       
We can change the name of the default import      
but with the rest, I have to make sure that I'm calling it the same as the export name.  

## What I have learned with this project:      
* The concept of modules and how it work
* How and when use modules
* How to import and export modules:
    * Import / Export as default
    * Import / Export multiple things
