var add;
add = function (n1, n2) {
    return n1 + n2;
};
// interfaces can be implemented into a class
// can implement multiple interfaces by separating with a comma
var Person = /** @class */ (function () {
    function Person(n) {
        this.name = n;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + ' ' + this.name);
    };
    return Person;
}());
var user1;
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
