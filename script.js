//Todo List in the Console
let userInput = prompt("What would you like to do?");
let todoList = [];

while (userInput != 'quit') {
    if (userInput === 'new') {
        let newTodo = prompt("Input new item todo");
        todoList.push(newTodo);
    } else if (userInput === 'list') {
        console.log("**********")
        for (let [ind, item] of todoList.entries()) {
            console.log(`${ind}: ${item}`);
        }
        console.log("**********")
    } else if (userInput === 'delete') {
        let deleteInd = prompt("Index of item for deletion?");
        todoList.splice(deleteInd, 1);
    } else if (userInput === 'erase') {
        let areYouSure = prompt("Are you sure - Delete All (y/n)?");
        if (areYouSure === 'y') {
            todoList = [];
        } else {
            break;
        }
    }
    userInput = prompt("What would you like to do?");
}
