let numero1, numero2, soma, subtracao, mutiplicacao, divisao

numero1 = parseInt(prompt("Digite um número:"));
numero2 = parseInt(prompt("Digite um número:"));

soma = `<h1>A soma desses números é: ${numero1 + numero2}</h1> <br>`
subtracao = `A subtracao dos números é: ${numero1 - numero2} <br>`
mutiplicacao = `A mutiplicacao desses números deu: ${numero1 * numero2} <br>`
divisao = `A divisao desses números deu: ${numero1 / numero2} <br>`

document.write(soma)
document.write(subtracao)
document.write(mutiplicacao)
document.write(divisao)