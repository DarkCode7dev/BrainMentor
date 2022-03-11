class Employee{
    private id:number;
    private name:string;
    private salary:number;
    constructor(id:number,name:string,salary:number){
        this.id=id;
        this.name= name;
        this.salary=salary;
    }


    public show():void{
            console.log(`Id is ${this.id} , ${this.name},${this.salary} `);
    }
}

var ram :Employee =new Employee(12,"lo",58547887);
ram.show();
