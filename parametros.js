//Parâmetros de Função

function soma(num1, num2){
    return num1 + num2;
}

//console.log(soma(2, 2))
//console.log(soma(245, 20))
//console.log(soma(-500, 60))

// parâmetros x argumentos

//ordem dos parâmetros

function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`
}

//console.log(nomeIdade(40, "Juliana"))

function multiplica(num1 = 1, num2 = 1){
    return num1 * num2;
}

console.log(multiplica(soma(4, 5), soma(3, 3)))

//Função sem Retorno e sem Parâmetro

function cumprimentar(){
    console.log('oi gente!')
   }
   
   cumprimentar()

//Função sem Retorno, com Parâmetro

function cumprimentaPessoa(pessoa){
    console.log(`oi, ${pessoa}!`)
   }
   
   cumprimentaPessoa('Helena')

//Função com Retorno, sem Parâmetro

function cumprimentar(){
    return 'Oi gente!'
   }
   
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
   cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”

//Função com Retorno e mais de um Parâmetro

function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
   }
   
   operacaoMatematica(15, 30, 45) // 90

//Parâmetros x argumentos: Na prática se referem ao mesmo tipo de dado; algumas documentações se referem a parâmetros no momento em que a função é definida (no caso, numero1, numero2, etc) e argumentos como os dados que utilizamos para executar a função (ou seja, 30, 45, etc).
