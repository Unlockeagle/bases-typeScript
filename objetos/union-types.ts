(() => {
    type Hero = {
        name: string;
        age?: number;
        powers: number[];
        getName?: () => string;

    }

    let myCustomVariable: (string | number | Hero) = 'Fernando'
    
    console.log(typeof myCustomVariable);
    
    myCustomVariable = 10
    console.log(typeof myCustomVariable);

    myCustomVariable = {
        name: 'Batman',
        age: 25,
        powers: [1]
    }
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
    
    myCustomVariable.name = 'Superman'
    console.log(myCustomVariable);
    
})()