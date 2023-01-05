// let ages = [5, 4, 3, 2, 1, 5];

// let getAge = ages.indexOf('31')

// console.log(ages.indexOf(5))

// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

// console.log(beasts.indexOf('bison'));

// var array = [1,2,3,4,5,6,7,8,9];
// console.log(array.indexOf(9));  

var vegetais = ['batata', 'tomate', 'pimenta', 'pimentao'];

function atualizarColecaoVegetais (vegetais, vegetal) {
    if (vegetais.indexOf(vegetal)) {
        vegetais.push(vegetal);
        console.log('Nova coleção de vegetais é : ' + vegetais.join(', '));
    }
    
}


atualizarColecaoVegetais(vegetais, 'espinafre');
