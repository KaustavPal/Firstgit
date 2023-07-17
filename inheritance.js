class Member{
    constructor(name,age,phone_number,address,salary){
        this.name=name;
        this.age=age;
        this.phone_number=phone_number;
        this.address=address;
        this.salary=salary;
    }
    printSalary(){
        return `Salary= ${this.salary}`;
    }
}

class Employee extends Member{
    constructor(name,age,phone_number,address,salary,specialization){
        super(name,age,phone_number,address,salary);
        this.specialization=specialization;
    }
    print_details(){
        console.log(`Name= ${this.name}, Specialization= ${this.specialization}, ${super.printSalary()}`);
    }
}

class Manager extends Member{
    constructor(name,age,phone_number,address,salary,department){
        super(name,age,phone_number,address,salary);
        this.department=department;
    }
    print_details(){
        console.log(`Name= ${this.name}, Department= ${this.department}, ${super.printSalary()}`);
    }
}

let emp1 = new Employee("Ram",25,"7003","Bangalore",1000,"cse");
emp1.print_details();

let emp2 = new Employee("Shyam",250,"8098","Chennai",2000,"civil");
emp2.print_details();

let man1 = new Manager("babu",100,"1234","Bangalore",1000,"JP");
man1.print_details();

let man2 = new Manager("Rao",250,"456","Kerala",3000,"GC");
man2.print_details();