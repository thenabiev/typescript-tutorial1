export {}


interface Person {
    firstName: string;
    lastName?: string;
}
function fullName(person:Person){
    console.log(`${person.firstName} ${person.lastName}`);
    
}



let p={
    firstName: "Su-57",
}

fullName(p)
