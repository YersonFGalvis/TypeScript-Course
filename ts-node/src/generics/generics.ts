//Una funcion generica es una funcion que recibe argumentos any pero
//segun que le mandemos ella podra usar metodos/propiedades de ese tipo de dato

//funciones tradicionales normales

// export const PrintObject = ( argument: any) => {

//     console.log(argument);

// }

// export function genericFunction(argument: any) { 
//     return argument;
// }   

// funciones tradicionales genericas, la letra T es un standart para decir que la funcion
//es generica, pero puede ser cuaquier letra o palabra

export const PrintObject = ( argument: any) => {

    console.log(argument);

}

export function genericFunction<T>(argument:T) { 
    return argument;
}

export const genericArrow = <T>(argument:T) => {

    return argument;

}