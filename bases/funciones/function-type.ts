(()=>{

    const addNumbers = (a:number, b:number) => a + b;

    const greet = (name: string) => `Hola ${name}`;

    const saveTheWorld = () => `El mundo esta salvado`

    let myFunction: () => string; //la variable es de tipo funcion
    // let myFunction: (y:number, z:number ) => number; //la variable es de tipo funcion
    // let myFunction: (y:string) => string; //la variable es de tipo funcion

    // myFunction = 10;
    // console.log(myFunction);

    // myFunction = addNumbers;
    // console.log(myFunction(1,2));

    // myFunction = greet;
    // console.log(myFunction( 'Yerson' ) )

    myFunction = saveTheWorld;
    console.log(myFunction());


})()