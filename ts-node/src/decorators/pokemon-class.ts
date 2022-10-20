
//Decorador
//LOS DECORADORES AFECTAN A CLASES, METODOS DE CLASE, ATRIBUTOS ETC
//UN DECORADOR SE DISPARA EN EL MOMENTO DE EVALUAR LA CLASE, CUANDO SE TRASNPILA EL CODIGO A JS

function printToConsole(constructor:Function){
    console.log(constructor);
}

const printToConsoleConditional = (print:boolean = false):Function => {

    if(print){
        return printToConsole;
    }else{
        return () => {}
    }
}

const bloquearPrototipo = function(constructor:Function) {

    Object.seal( constructor)
    Object.seal (constructor.prototype)

}

function CheckValidPokemonId(){
    return function(target:any, propertyKey:string, descriptor:PropertyDescriptor){
        
        const originalMethod = descriptor.value;

        //argumentos del metodo savePokemonToDB
        descriptor.value = (id: number) =>{
            if (id<1 || id>800) {
                return console.error('The pokemon ID must be between 1 and 800');
            }else{
                return originalMethod(id)
            }
        }

    }
}

//DECORADOR DE PROPIEDAS, NO RECIBE EL ARGUMENTO DESCRIPTOR
function readonly(isWritable:boolean = true):Function{

    return function(target:any, propertyKey:string){

        // console.log(target,propertyKey);

        const descriptor: PropertyDescriptor =  {

            get(){
                console.log(this);
                return 'Yerson';
            },
            set(this, value){
                // console.log(this, value);
                Object.defineProperty(this, propertyKey, {
                    value,
                    writable: !isWritable, //lo opuesto a lo que llega
                    enumerable: false
                })
            }

        }

        return descriptor;

    }
}



@bloquearPrototipo
//@printToConsole DECORADOR DE CLASE, se ejecuta en el momento que se define la clase
@printToConsoleConditional( false )

export class Pokemon {

    @readonly(false)
    public publicApi:string = 'https://pokeapi.co';

    constructor(
        public name: string
    ){}

    @CheckValidPokemonId() //Factory decorator, se le aplica a una funcion y devuelve una funcion
    savePokemonToDB(id:number){
        console.log(`Pokemon saved ${id}`);
    }  
}