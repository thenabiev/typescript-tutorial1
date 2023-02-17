export {}
let message:string="It's a basic string example";

let isBeginner:boolean=true;

let count:number=9;
let me:object={name:'Sahin', age:23};
const name:string="Sahin"

let n:null=null;
let u:undefined=undefined;

let isNew:boolean=null;
let myName:string=undefined

console.log(isNew, myName);

let strArr1:string[]=["Bir", "iki"];
let strArr2:Array<string>=["Bir", "iki"];

let numArr1:number[]=[1, 2, 3]
let numArr2:Array<number>=[1, 2, 3]

let mix1:[number, string]=[ 1, "iki" ];

// ########### ENUM #################

enum Color {Red, Green=32, Blue};
 
let c: Color= Color.Red


let randomValue:any=13

randomValue=true;
randomValue="Sahin"

console.log(randomValue);

let myVariable:unknown=10;


function hasName(obj: any): obj is{name: string}{
    return !! obj &&
        typeof obj==="object" && 
            "name" in obj
}

if(hasName(myVariable)){
    console.log(myVariable.name, 999);
}
(myVariable as string).toUpperCase()


let a;
a=10;
a=true;

let b=20;

let multiType: number | boolean;
multiType=33



// ###########  #################