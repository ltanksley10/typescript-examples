//classes with types

//
abstract class Department {
    //readonly can be added to avoid being able to write over
    // private readonly name: string;
    //add private keyword to make employees only accessible inside class
    //this is a modifier that forces people to add employees with addEmployee
    //method instead of accounting.employees[] syntax
    protected employees: string[] = [];
    //protected can be used instead of private to allow use outside of class
    // private employees: string[] = [];
    
    //can alternatively list name as parameter in constructor and 
    //make sure to list it as public
    constructor(public name: string, protected id: string) {
        // this.name = n;
    }
    
    //add this parameter typescript recognizes it as a hint as to which this
    // abstract is used to force all classes to override method
    abstract describe(this: Department): void;
    
    addEmployee(employee: string) {
        this.employees.push(employee);
    }
    
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
    
    //static methods allow you access without instantiating a class
    static createEmployee(name: string) {
        return {name: name }; 
    }
}

//it department inherits everything from department class
class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        //super calls the constructor of the base class
        super(id, 'IT');
        this.admins = admins;
    }
    describe () {
        console.log('IT Department - ID: ' + this.id);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;
    
    // a getter can be added to make private values acccessible
    // get mostRecentReport() {
    //     //getters must return something
    //     if (this.lastReport) {
    //         return this.lastReport;
    //     }
    //     throw new Error('No report found.');
    // }
    
    // //setters are used similarly to getters
    // set mostRecentReport(value: string) {
    //     this.addReport(value);
    // }
    
    private constructor(id: string, private reports: string[]) {
        super(id, 'IT');
        this.lastReport = reports[0];
    }
    
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }
    
    describe() {
        console.log('Accounting Department - ID ' + this.id);
    }
    
    addEmployee(name: string) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
    
    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }
    
    printReports() {
        console.log(this.reports);
    }
}

//static methods allow you access to class without using new keyword
const employee1 = Department.createEmployee('Max');
console.log(employee1);

// const accounting = new Department('Accounting');
const it = new ITDepartment('Accounting', ['Max']);
const accounting2 = AccountingDepartment.getInstance();

// console.log(accounting.mostRecentReport);

// accounting.addEmployee('Max');
// accounting.addEmployee('Nanu');

// accounting.describe();
// accounting.printEmployeeInformation();

it.addEmployee('Max');
it.addEmployee('Manu');

it.describe();
it.name = 'New Name';
it.printEmployeeInformation();

console.log(it);

// const accounting = new AccountingDepartment('d2', []);
// accounting.addReport('Something went wrong...');
// accounting.printReports();

//must follow same structure as class Department
// const accountingCopy = { name: 'Dummy', describe: accounting.describe };

// accountingCopy.describe();