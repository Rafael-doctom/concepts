const MyName = (name) => {
    console.log(`My name is ${name}`);
};

function myNameIs(name) {
    console.log(`My name again is ${name}`);
};


MyName('Rafael');
myNameIs('Rafael');

// Regular functions are constructible, they can be called using the new keyword.
function Sum(a, b) {
    console.log(a + b)
}

let resultOfSum = new Sum(1, 2)


// TypeError: add is not a constructor
// let add = (x, y) => console.log(x + y);
// const sum = new add(2,4); 


// nome de parâmetro duplicado não permitido neste contexto
// function add(a, a) {}
// const setaFunc = (a,a) => {}

// elevação is possible
Result()
function Result() {
    console.log('result')
}

// but with arrow don't possible
// resultTwo()
// let resultTwo = () => {
    // console.log('result2')
// }

// output:  ReferenceError: Não é possível acessar 'arrowFunc' antes da inicialização
