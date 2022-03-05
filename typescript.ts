//Implicit object
var obj ={
    name:'Am',
    city:"Del"
}
obj.name='d';
console.log(obj)

//Explicit object

var obj2 :{ name:string,city:string}={ name:'Am',city:"Del"}
console.log(obj2)

var arr= [10,20,30]//Implicit array
var arr2 : number[]=[10,20,30]//Explicit array

var d: number|boolean;


type myType={
    id:number, name: string, salary:number
}
//x object of type myType
var x : myType;


var arr4: Array<string>=["Am","ra"]//generic type array
var  a6:[string,number]=["Ami",44]
//Enum 
enum CarType{
    SUV="SUV",
    SEDAN="SEDAN"
}

console.log(CarType.SEDAN)
console.log(CarType['SEDAN'])



const MONDAY = 2;
enum Days{
SUNDAY=10,MONDAY,TUESDAY
}

var day:Days=Days.MONDAY;
console.log(day)



function show(x: number, y:number):number{return x+y;}
function disp():void{}
var result = show(10,20);
var add:(x:number,y:number)=>number;
add=show;
result=add(10,20)
