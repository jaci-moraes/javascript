var idade = 22
console.log(`Você tem ${idade} anos,`)
if(idade < 16){
    console.log(`Você não pode votar.`)
} else if(idade < 18 || idade >= 67) {
    console.log(`O seu voto é opcional.`)
} else if(idade >= 18) {
    console.log(`Você pode votar.`)};