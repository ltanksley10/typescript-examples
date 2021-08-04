var el = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Privileges: ' + emp.startDate);
    }
}
printEmployeeInformation({ name: 'Manu', startDate: new Date() });
function moveAnimal(animal) {
    var speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving at Speed ' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 10 });
//type casting 
//helps you tell typescript some value is of a specific type
//accessing element in dom
var userInputElement = document.getElementById('user-input');
// or 
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement;
userInputElement.value = 'Hi there!';
var errorBag = {
    email: 'Not a valid email!'
};
