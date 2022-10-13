(()=>{

    type Hero = {
        name: string;
        age?:number;
        powers:string[]; 
        getName?:()=>string;
    }

    let myCustomVariable: string | number | Hero = 'Yerson';
     
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);

    myCustomVariable = {
        name:'Bruce',
        age:43,
        powers:['No tiene']
    }

    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);

})()