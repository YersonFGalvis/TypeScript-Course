import { PrintObject, genericFunction, genericArrow } from '../generics/generics';
import { Hero, Villian } from '../interfaces'; //busca el index.ts
// import { Hero } from './classes/Hero';
// // import { Hero as SuperHero, Hero2 } from './classes/Hero';
// // import * as HeroClasses from './classes/Hero';


// // const ironman = new SuperHero('Ironman', 1, 55);
// const ironman = new Hero('Ironman', 10, 55);

// console.log( ironman );
// console.log( ironman.power );


// PrintObject(123);
// PrintObject( new Date());
// PrintObject({a:1 , b:2, c:3});
// PrintObject([1,2,3,4,5,6,7,8,9]);
// PrintObject(('Hola Mundo'));

const name:string = 'Yerson'

//al ser una funcion generica sabe que tipo de dato le esta llegando y que metodos puede usar
console.log( genericFunction(3.141618).toFixed(2) );

console.log( genericFunction(name).toUpperCase()  );

console.log( genericFunction(new Date()).getDay )


//USO DE UN GENERICO MAS DETALLADO

const deadpool = {

    name:'Deadpool',
    realName:'Wade Winston Wilson',
    dangerLevel:130
}

console.log( genericArrow<Villian>( deadpool) )
console.log( genericArrow<Hero>( deadpool) )









