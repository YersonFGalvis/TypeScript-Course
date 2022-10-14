"use strict";
(() => {
    class Mutante {
        constructor(poder, realName = "") {
            this.poder = poder;
            this.realName = realName;
            this.poder = poder;
            this.realName = realName;
        }
    }
    class XMen extends Mutante {
        atacar() {
            console.log("Ataca con su poder " + this.poder);
        }
        bio() {
            return `Nombre verdadero: ${this.realName}, Poder: ${this.poder}`;
        }
    }
    class Villian extends Mutante {
        atacar() {
            console.log("Ataca con su poder " + this.poder);
        }
        bio() {
            return `Nombre verdadero: ${this.realName}, Poder: ${this.poder}`;
        }
    }
    const ciclops = new XMen("laser", "Scott Summers");
    console.log(ciclops);
    ciclops.atacar();
    console.log(ciclops.bio());
    const magneto = new Villian("Magnetismo", "Magnus");
    console.log(magneto);
    magneto.atacar();
    const printName = (caracter) => {
        console.log(magneto.realName);
    };
    printName(magneto);
})();
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('Antman', 'Capitan');
    console.log(Avenger.avgAge);
})();
(() => {
    class Avenger {
        constructor(name, team, realName, avgAge = 35) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            Avenger.avgAge = avgAge;
        }
        static getAvgAge() {
            return this.name;
        }
        bio() {
            return `${this.name} (${this.team})!!`;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('Antman', 'Capitan', 'Scott lang');
    console.log(Avenger.avgAge);
    console.log(antman.bio());
    console.log(Avenger.getAvgAge());
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor Avenger llamado!');
        }
        getFullName() {
            return `${this.name}${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log('Constructor X-MEN llamado!');
        }
        get FullName() {
            return `${this.name}-${this.realName}`;
        }
        set FullName(name) {
            if (name.length < 3) {
                throw new Error('el nombre debe ser de mas de 3 caracteres');
            }
            this.name = name;
        }
        getFullNameDesdeXmen() {
            console.log(super.getFullName());
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    console.log(wolverine);
    wolverine.getFullNameDesdeXmen();
    wolverine.FullName;
    wolverine.FullName = 'Yerson';
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.intance) {
                Apocalipsis.intance = new Apocalipsis('Soy apocalipsis el único');
            }
            return Apocalipsis.intance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();
    apocalipsis1.changeName('Xavier');
    console.log(apocalipsis1, apocalipsis2, apocalipsis3);
})();
//# sourceMappingURL=main.js.map