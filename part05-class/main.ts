export {}

class Employee{
    public empName: string;

    constructor(name: string){
        this.empName=name;
    }

    greet(){
        console.log(`Hello ${this.empName}`);
        
    }

}

let emp1=new Employee("Jager");
emp1.greet()
console.log(emp1.empName);


class Manager extends Employee{

    constructor(managerName: string){
        super(managerName)
    }

    delgWork(){
        console.log(`Manager delegating work ${this.empName}`);
        
    }
}

let mang1=new Manager("Ymir");

mang1.greet();
mang1.delgWork();
console.log(mang1.empName);
