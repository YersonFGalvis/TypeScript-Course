(()=>{

    const fullName = (firstName:string, lastName:(string|boolean)):(string|boolean) =>{

        return `${firstName} ${lastName}`;

    }

    let noName:string;

    const name = fullName( 'Tony', true);

    console.log(name);


})()