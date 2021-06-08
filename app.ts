//intersection types

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

//typescript will see this is a number since that's the only
//intersection we have here
type Universal = Combinable & Numeric; 

// intersection types can help express something in a simpler
//or easier way