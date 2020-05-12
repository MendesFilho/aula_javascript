function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar() {
   // window.open("https://digitalinnovation.one/sign-in");
    window.location.href = "https://digitalinnovation.one/sign-in";
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
    elemento.innerHTML = "Obrigado por passar o mouse!";
   // alert("Trocar texto");
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
    elemento.innerHTML = "Passe o mouse aqui!";
   // alert("Trocar texto");
}

function load(){
   alert("página carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}


/*

function soma(n1, n2){
    return n1 + n2;
}

function validaIdade(idade) {
    var validar;

    if (idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));

*/


/*
var d = new Date();
console.log(d);
console.log(d.getMonth()+1);
console.log(d.getDate());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
alert(d);
*/


/*
var count;

for (count = 0; count < 5; count++) {
    console.log(count);    
}
*/



/*
var count = 0;

while (count <= 5) {
    console.log(count);
    alert(count);
//    count = count + 1;
count++;
}
*/


/*
var idade = prompt("Qual sua idade?");
if (idade >= 18) {
    console.log("Pode entrar!");
} else {
    console.log("Você não é maior de idade");
}
*/



//var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"banana", cor:"amarela"}];
//console.log(frutas);
//alert(frutas.nome);


/*
var fruta = {nome:"maça", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/


//var lista = ["maça","uva","laranja"];
//lista.push("banana");
//lista.pop();
//console.log(lista);
//console.log(lista.join(" - "));
//console.log(lista.toString());
//console.log(lista.length);
//console.log(lista.reverse());



//var nome = "Melquisedec Mendes";
//var idade = 38;
//var idade2 = 12;
//var frase = "Japão é o melhor time do mundo!"
//var n1 = 5;
//var n2 = 9;


//alert(nome + " tem " + idade + " anos");
//alert("Soma das idades é =" + (idade + idade2));

//console.log(nome);
//console.log("Soma das idades="+(idade+idade2));
//console.log(frase.toUpperCase());
//console.log(frase.replace("Japão","Brasil"));

//var result = n1 * idade3;

//console.log(result);
//alert("Resultado da multiplicação=" + result);