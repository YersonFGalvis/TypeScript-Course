(()=>{

    const fullName = (firstName:string, lastName?:(string|boolean), uper:boolean = false ):(string|boolean) =>{

        if(uper){
            return `${firstName} ${lastName || 'No lastName'}`.toUpperCase();
        }else{
            return `${firstName} ${lastName || 'No lastName'}`;
        }

        

    }

    let noName:string;

    const name = fullName( 'Tony','Stark',true);

    console.log(name);


})()