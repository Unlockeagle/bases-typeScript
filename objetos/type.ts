(() => {
    //*Tipo solo para reglas de ts
    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;

    }

    let flash:Hero = {
        name: 'Barry',
        age: 24,
        powers: ['Super Veloz', 'Viajar en el tiempo']
    } 
    
    let superman:Hero = {
        name: 'Clark kent',
        age: 30,
        powers: ['Super Veloz']
    } 

  
    
    


})()