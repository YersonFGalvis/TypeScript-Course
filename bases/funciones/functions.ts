(()=>{

    const hero: string = 'Flash';

    function returnName():string{
        return hero;
    }

    const activateBatisignal = ():string =>{
        return 'Batisignal activated';
    }

    console.log(typeof activateBatisignal)

    const heroName = returnName();

    //Typescript infiere que hernoName sera del tipo que devuelva la funcion

})()