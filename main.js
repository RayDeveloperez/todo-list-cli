const prompt = require('prompt-sync')({sigint: true});
console.log('~Welcome to your personal To-Do list~');
console.log('\n~ Select an action ~');
console.log('~ [1] Create a to-do item ~');
console.log('~ [2] Complete a to-do item~');
console.log('~ [3] Exit to-do List Application~');
let answer = Number(prompt('> '));
let toDoList = [];
let statusArray = [];

while(answer !== 3){
    if(answer === 1){
        console.log('~ Creating a new to-do item ~');
        console.log('What is this to-do item called?');
        // add to do item
        let addItem = prompt('> ');
        while(addItem.length === 0){
            console.log('~Invalid: Input cannot be empty.  Try again: ~')
            addItem = prompt('> ');
        }

        toDoList.push(addItem);
        statusArray.push(false)



        displayList();

        // reprompt the user
    selectAnswer();
    } else if(answer === 2){
        if(toDoList.length !== 0){

        
        console.log('~ Completing a to-do item ~');
        console.log('Which to-do item would you like to complete?');
        displayList()
        let newStatus = Number(prompt('>  '));

        // console.log("newSattus check: " + newStatus)
        // console.log("type check; " +typeof newStatus)

        while(isNaN(newStatus)|| newStatus > statusArray.length||newStatus < 1){
            
            console.log('Please input a number that corresponds to an item in the list: ')
            newStatus = Number(prompt('>  '))
        }

        statusArray[newStatus - 1] = true;
    }else {
        console.log("Please add something to your to-do list before trying to complete an item")
    }

        displayList()

        selectAnswer();
}else {
    console.log('Invalid operation');
    selectAnswer();
}
    console.log('~ Exiting To-do List Application ~')
    function selectAnswer(){
        console.log('\n~ Select an action ~');
        console.log('~ [1] Create a to-do item ~');
        console.log('~ [2] Complete a to-do item~');
        console.log('~ [3] Exit to-do List Application~');
        answer = Number(prompt('> '));
    }
    function displayList(){
        if(toDoList.length === 0){
            console.log("Your to-do list is empty.")
        }else{
            console.log(`You have ${toDoList.length} to-do item(s)`);
        }
        for(let i = 0; i < toDoList.length; i++){
            let status = "";

            if(statusArray[i] === false){
            status = "[incomplete]";
            }else if (statusArray[i] === true){
                status = "[Complete]";
            }
            console.log(`${i+1}. ${status} ${toDoList[i]}`)
        }       


             
         }
        }
/*
1. Figure out the UI
-console.log()
    -welcome message
    -different option (add task, complete task, exit program)
    -error messages for invalid option
    -spacing/separators to make it look nice
-Prompts
    -Numbers to decide which option using ifs
    1. adding a task/create an item -prompt user to create item -
    2. mark task as complete -prompt user for item completed
    3. Exit
-While Loop
    -program has no known ending, so we want to be able to prompt them indefinitly
-Display the todo list to the user.
    -completion status
    -the name of the item
    -number associated with the item
    -loop to display each item in the todo list
2. Add To-Do Items (choice === 1)
    -prompt for the to-do item
    -save item by storing it in an array
    -an array to keep track of toDo items
    -global array (global variable)
    - .push to add items to array
2.5 - how do we set items to be incomplete
    -any item in the list is [incomplete] until we mark it [complete]
    -whenever we add an item to the todo list it is [incomplete] by default.
    array of booleans
    [true,      false,          true]           status array
    get food,   wash car,    cut grass          todolist array
     0            1               2             shared index
    
    let status = []
    by default , when we add a new item , we want to add a false boolean to our status array.


3. Complete To-Do Items
-display current items in the toDo list w/ their
status
-pick whoch toDo item to mark as complete - swap 
its status from false to true 

-make sure we display the updated list right after




*/







//Global Scope vs Local Scope

//Global Variables
// a global variable is a variable declared outside any loop/function/if statement
//we can access the value of a global variable from anywhere in our code

// let a = 10; //global variable

// function addTenToA(){
//     a += 10;
// }

// addTenToA();

// console.log(a);

// // Local Variables
// // a local variable can only be used inside of the scope that is is defined in
// // because we declare our variable b inside our function addTenToB(), we can only ever directly use this variable inside this function
// function addTenToB(){
//     let b = 7; //local variable
//     b += 10;

//     //you CAN however access the value of your local variables by utilizing return
//     return b;
// }

// let gB = addTenToB(); //global variable

// console.log(gB);

// let b = 9; //global variable
// addTenToB();
// console.log(b);


// let str = "Sky";

// function printStr(){

//     let str = "Earth";

//     //local variable str is more specific to the scope of this function, so "Earth" will print in this console.log()
//     console.log("Inside Function: " + str); 

// }

// printStr();

// console.log("Outside Function: " + str);


// let num1 = 8;

// //comment out numTest2 to run correctly
// // function numTest(){
// //     let num2 = 5;
// //     num1 = num2; // change value of num1 to 5

// //     //you can modify the value of a global variable from anywhere in your code, just like you can access the value of a global variable from anywhere in your code
// // }

// // numTest()
// // console.log("num1 is equal to: " + num1);


// //comment out numTest to run correctly
// function numTest2(num1){
//     let num2 = 5;
//     num1 = num2; // change value of num1 to 5

//     //num1 the parameter is essentially a local variable.  the local variable/parameter num1 is more specific to this function when trying to access num1
//     //therefore, printing num1 will give us the value of our local variable/parameter num1 instead of the global variable num1
//     console.log("num1 inside the function: " + num1);
// }

// numTest2(20);
// console.log("num1 is equal to: " + num1); 