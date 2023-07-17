class Employee{
    constructor(name, salary){
        this.name=name;
        this.salary=salary;
    }
}

let employee1 = new Employee("Kaustav", 30000);
let employee2 = new Employee("Soham", 15000);
let employee3 = new Employee("Subhayan", 35000);
let employee4 = new Employee("Swarup", 25000);
let employee5 = new Employee("Suman", 20000);

const employeeArray=new Array(employee1,employee2,employee3,employee4,employee5);
employeeArray.sort(function(a,b){return b.salary-a.salary});
for(let i=0; i<employeeArray.length; i++){
    console.log(employeeArray[i].name);
}

