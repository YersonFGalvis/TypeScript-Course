//es como una mini clase que contiene logica y funciones, que exponemos al mundo exterior cuando las necesitan
//se usa mucho al crear librerias o framweworks

namespace Validations {

    export const ValidateText = (text: string):boolean =>{

        return ( text.length > 3)? true: false;

    }

    export const ValidateDate = (myDate: Date): boolean =>{
        return ( isNaN( myDate.valueOf() ) )
        ? false
        : true;
    }


}

console.log( Validations.ValidateText('Yer'));
console.log( Validations.ValidateText('Yer'));