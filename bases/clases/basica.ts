(()=>{

    class Avenger{
        private name: string;
        private team: string;
        public realName?: string;
        static avgAge: number = 35;

        constructor(name:string, team:string, realName?:string){
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }


    const antman: Avenger = new Avenger('Antman', 'Capitan');
    console.log(Avenger.avgAge);
    //las propiedades static se puede acceder como una variable normal,
    //Pero no instanciando la clase
    // antman.avg


})()