(()=>{
    
    class Avenger{
        // private name: string;
        // private team: string;
        // public realName?: string;
        static avgAge: number = 35;
        static getAvgAge(){
            return this.name;
        }
    
        constructor(
            private name:string,
             private team:string, 
             public realName?:string,
             avgAge: number = 35
            ){
                Avenger.avgAge = avgAge;
             }

            public bio():string {
                return `${this.name} (${this.team})!!`
             }
    }
    
    
    const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott lang');
    console.log(Avenger.avgAge);
    console.log(antman.bio());
    console.log(Avenger.getAvgAge());

})()