(() => {
    const fullName = (firstName:string, lastName?:string, upter:boolean = false):string => {
        
        if(upter === true) {
            return `${firstName} ${lastName || '*-*-*'}`.toUpperCase();
        } else {

            return `${firstName} ${lastName || '*-*-*'}`;
        }
        
    }


    const name = fullName('Tony', 'Strak', true)
    console.log({name});
    
})()