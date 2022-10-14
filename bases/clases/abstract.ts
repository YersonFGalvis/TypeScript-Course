(() => {
    //ABSTRACCION
    abstract class Mutante{

        constructor(public poder:string, public realName:string = ""){
            this.poder = poder;
            this.realName = realName;
        }
        //metodos obligatorios que deben implementar las clases hijas
        public abstract atacar():void;
        public abstract bio():string;
    }
 
    class XMen extends Mutante{
        //no necesita poner de nuevo el constructor
 
        //PERO si esta obligado a implementar los metodos abstractos
        //si no lo hace entonces TS se quejara
        public atacar(): void {
            console.log("Ataca con su poder "+this.poder);
        }
        public bio(): string {
            return `Nombre verdadero: ${this.realName}, Poder: ${this.poder}`;
        }
    }

    class Villian extends Mutante{

        public atacar(): void {
            console.log("Ataca con su poder "+this.poder);
        }
        public bio(): string {
            return `Nombre verdadero: ${this.realName}, Poder: ${this.poder}`;
        }
    }
 
    //no se puede instanciar clases abstractas
    //let ciclops:Mutante = new Mutante("","");
 
    const ciclops = new XMen("laser","Scott Summers");
    console.log(ciclops);
    ciclops.atacar();
    console.log(ciclops.bio());

    const magneto = new Villian("Magnetismo","Magnus")
    console.log(magneto);
    magneto.atacar();

    const printName= (caracter:Mutante) => {
        console.log(magneto.realName);
    }

    printName(magneto);
})();