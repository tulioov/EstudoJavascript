//Ex.1
console.log("O arquivo 'ex1js' está funcionando!");
//Ex2
var nome = 'Túlio';
var idade = '31';
console.log('Olá meu nome é '+nome+', tenho '+idade+' anos e estou estudando Javasscript');
//Ex3
var nomeAluno = 'tulio'
var matricula = '0813467'
var nota1 = 10;
var nota2 = 9.8;
console.log('O aluno '+nome+', matrícula '+matricula+', obteve a média final ' + (nota1+nota2)/2);
//Ex4 
var nTelefone = '983375191'
console.log("Resultado cel = 9 digits: " + (nTelefone.length === 9));

//Ex5
console.log('32 elevado a 6 é : ' + Math.pow(32,6));
//Ex6
//c palavra reservada
//d nao pode usar hifem
//f não pode começar com numero
//g nao pode ter espaço

//ex7
var quantidade = "25";
var numero = 6;
var pressao;
var temperatura = 40;
temperatura = null;

console.log(quantidade += quantidade); // 2525
console.log( (7+5) / numero + 2 );  //4
console.log(pressao); //underfind
console.log(temperatura); //null
console.log(typeof pressao); //underfind
console.log(typeof temperatura); //object

//ex8
var idade = 65;

console.log(idade != 65); // false
console.log(idade >= 65); //true
console.log("65" == idade); //true
console.log(65 !== idade); // false
console.log(typeof (idade > 60)); //boolean
console.log(typeof (idade > 70)); //boolean

