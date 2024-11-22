(() => {

    let flash: { name: string, age?:number, powers: string[], getName?: () => string  } = {
        name: 'Barry',
        age: 24,
        powers: ['Super Veloz', 'Viajar en el tiempo']
    } 
    
    let superman: { name: string, age?:number, powers: string[], getName?: () => string  } = {
        name: 'Clark kent',
        age: 30,
        powers: ['Super Veloz']
    } 

    console.log(flash);
    
    
    // flash = {
    //     name: 'Superman',
    //     // age: 60,
    //     powers: ['Super fuerza'],
    //     getName() {
    //         return this.name 
    //     }
    // }
    // console.log(flash.getName());


})()