(()=>{
    
    type Avenger = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder:number;
    }

    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul Bettany',
        activo:true,
        poder:1500
    }

    // const { poder, vision } = avengers;

    // console.log(poder, vision.toUpperCase());

    const printAvenger = ({ironman, ...rest}:Avenger )=>{

        console.log(ironman, rest);

    }

    // printAvenger( avengers);

    const avengersArr:string[] = ['Cap. America', 'Ironman', 'Hulk'];

    const [, ironman] = avengersArr;

    console.log({ironman});


})()