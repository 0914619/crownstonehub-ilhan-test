#!/usr/bin/env node
function greeter(person: string) {
    return "Hello, " + person; 
}

let user = "Dude";
console.log(greeter(user));