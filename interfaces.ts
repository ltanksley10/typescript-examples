//interface can be used instead of custom typed function
interface AddFn {
    (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2; 
};

//inheritance can be implemented with interfaces
interface Named {
    //inside an interface you can use readonly to make it clear
    // it can only be used once and not reset
    readonly name?: string;
    //you can also define optional properties in interfaces by 
    //adding a questionmark after property name
    outputName?: string;
}

//an interface describes the structure of an object
interface Greetable extends Named {
    //extending Named forces Greetable to inherit Named
    // age: number;
    greet(phrase: string): void;
}

// interfaces can be implemented into a class
// can implement multiple interfaces by separating with a comma
class Person implements Greetable {
    name?: string;
    
    constructor(n?: string) {
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