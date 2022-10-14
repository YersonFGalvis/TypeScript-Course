(()=>{

    class Avenger{
        name;
        power;

        constructor(name = 'No name', power = 0){
            this.name = name;
            this.power = power;
        }
    }

    const hulk = new Avenger('Hulk', 9001);

    console.log(hulk);

    class FlyingAvender extends Avenger{

        flying;

        constructor(name, power){
            super(name, power);
            this.flying = true;
        }
    }

     const falcon = new Avenger('Falcon', 50);
     console.log(falcon);

})()