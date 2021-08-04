//typegaurds help with union types
type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const el: ElevatedEmployee = { 
    name: 'Max', 
    privileges: ['create-server'],
    startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);    
    }
    if ('startDate' in emp) {
        console.log('Privileges: ' + emp.startDate);
    }
}

printEmployeeInformation({name: 'Manu', startDate: new Date()});

// discriminated union types

interface Bird {
    //literal type
    //gives 100% type safety
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case 'bird': 
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving at Speed ' + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 10});

//type casting 
//helps you tell typescript some value is of a specific type
//accessing element in dom
const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
// or 
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement;

userInputElement.value = 'Hi there!';

//index types 
//allows us to create objects which are more flexible regarding
//the properties they might hold
interface ErrorContainer {
    //defined by using square brackets & name of choice
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email!'
}