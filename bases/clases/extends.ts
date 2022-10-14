(()=>{

    class Avenger{

        constructor(
            public name:string,
            public realName: string
        
        ){
            console.log('Constructor Avenger llamado!')
        }

        protected getFullName(){
            return `${this.name}${this.realName}`
        }
        // private getFullName(){
        //     return `${this.name}${this.realName}`
        // }

        //LA DIFERENCIA ENTRE PRIVATE Y PROTECTED
        //PRIVATE SOLO DEJA ACCEDER A ESTA CLASE, NO A SUS HIJOS
        //PROTECTED DEJA ACCEDER A LOS HIJOS A LAS PROPIEDADES DE ESTA CLASE
    }

    class Xmen extends Avenger {
        //si la clase hija no tiene constructor, se ejecuta el del padre
        constructor(
            //recibimos el argumento  name y realname y ese argumento se lo pasamos al padre
            name: string,
            realName: string,
            public isMutant:boolean,
        ){
            super(name, realName)
            console.log('Constructor X-MEN llamado!')
        }

        get FullName(){
            return `${this.name}-${this.realName}`
        }

        set FullName(name:string){

            if(name.length < 3){
                throw new Error('el nombre debe ser de mas de 3 caracteres')
            }

            this.name = name;
        }

        getFullNameDesdeXmen(){
            console.log(super.getFullName());
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true);
    console.log(wolverine);
    wolverine.getFullNameDesdeXmen();
    wolverine.FullName; // GETTER no se ejecuta con ()
    wolverine.FullName = 'Yerson'; //SETTER

})()