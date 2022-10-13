(()=>{

    const fullName = (firstName:string, ...restArgs:string[]):string =>{

        return `${firstName} ${restArgs.join(' ') }`;

    }

    //se van agregando tantos argumentos como queramos 
    const superman = fullName( 'Clark', 'Joseph', 'Kent');

    console.log(superman);

    //REGLA DE ORO DE TS
    //SI SE PUEDE EN JS SE PUEDE EN TS

})()