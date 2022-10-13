(()=>{

    //Una funcion que es de tipo never, es una funcion que va a terminar
    //con un error y parara la ejecucion del programa
    
    const error = (message: string):never => {

            throw new Error(message);

    
    }

})