//be specific with types when working with objects
//its better practice to let typescript infer these on its own
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[]; 
//     //this marks a tuple
//     role: [number, string];
// } = {
//     name: 'Lori',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     //tuples are fixed length arrays to make it even more strictly typed
//     role: [2, 'author']
// };
//push is an exception thats allowed with tuples
// person.role.push('admin');
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
//enum makes it easier than using global values
//enum assigns labels to numbers
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'Lori',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
console.log(person.role);
//typescript allows anything to be done that can be done with strings
//if type is string etc
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
