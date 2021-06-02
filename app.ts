//an interface describes the structure of an object
interface Greetable {
    name: string;
    // age: number;
    greet(phrase: string): void;
}

// interfaces can be implemented into a class
// can implement multiple interfaces by separating with a comma
class Person implements Greetable {
    name: string;
    
    constructor(n: string) {
        this.name = n;
    }
    
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}

let user1: Greetable;

user1 = new Person('Max');

// user1 = { 
//     name: 'Max',
//     age: 30,
//     greet(phrase: string) {
//         console.log(phrase + ' ' + this.name);
//     }
// };

user1.greet('Hi there - I am ');
console.log(user1);

//interfaces are useful when wanting to force existence of a method