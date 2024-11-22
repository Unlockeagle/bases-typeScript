(() => {

    const error = (menssage: string):(never | number) => {

        if(false){
            throw new Error(menssage);

        }

        return 1
        
    }

    console.log('hola mundo1');
    error('Auxilio')
    console.log('hola mundo');
    
    

})()