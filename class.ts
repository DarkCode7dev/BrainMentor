class Employee{
    private id:number;
    private name:string;
    private salary:number;
    private _phone:string;
    private _email:string;
    constructor(id:number,name:string,salary:number){
        this.id=id;
        this.name= name;
        this.salary=salary;
    }

set phone(phone:string){
this._phone=phone;
} 

get phone(){
    return this._phone;
}




set email(email:string){
this._email=email;
} 


get email(){
    return this._phone;
}
    public show():void{
            console.log(`Id is ${this.id} , ${this.name},${this.salary} `);
    }
}

var ram :Employee =new Employee(12,"lo",58547887);
ram.show();
ram.email='f'

