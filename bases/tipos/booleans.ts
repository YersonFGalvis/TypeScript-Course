(()=>{

let isBatman: boolean = false;  
let isSuperman: boolean = true;

// en caso de resolverse, typescript sabe que boolean no deberia retornar un string
// isSuperman = (isBatman)? true : 'false'; 
isSuperman = (isBatman)? true : false; 

})()