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
