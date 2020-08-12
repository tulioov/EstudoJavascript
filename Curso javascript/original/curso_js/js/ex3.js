//ex1

var botaoConverter = document.getElementById("converter");

botaoConverter.onclick = function(){
    var celsius = document.getElementById("temp_celsius").value;
    celsius = parseInt(celsius);
    var resultado = (9*(celsius/5))+32;
    document.getElementById("temp_fahr").innerHTML = resultado;
}

//ex2

document.getElementById("anos_copa").innerHTML = "";
for(var i = 1930 ; i < 2019 ; i = i+4){
    document.getElementById("anos_copa").innerHTML += "<li>"+i+"</li>";
}


//ex3

var botaoCalcular = document.getElementById("calcular");

botaoCalcular.onclick = function(){
    var nTotalAulas = 20;
    var setentaPorcentoAulas = (nTotalAulas * 70) / 100;
    var nota1 = document.getElementById("nota1").value;
    var nota1 = parseInt(nota1);
    var nota2 = document.getElementById("nota2").value;
    var nota2 = parseInt(nota2);
    var faltas = document.getElementById("n_faltas").value;
    var presenteAulas = nTotalAulas - faltas;
    var media = (nota1 + nota2)/2;  

    document.getElementById("result").innerHTML = "";

    if(presenteAulas < setentaPorcentoAulas){
        document.getElementById("result").innerHTML = "Reprovado por falta";
    }
    if(media < 6.5){
        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + " Reprovado por media";
    }
    else{
        document.getElementById("result").innerHTML = "Aprovado";
    }
}

//ex4

var vendas_cursos = [

    {
        'aluno': 'Emmanuel Gomes',
        'data': '10/06/2018',
        'valor': 34.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Carla Dias',
        'data': '10/06/2018',
        'valor': 29.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Rafael Marques',
        'data': '11/06/2018',
        'valor': 39.99,
        'reembolso': '13/06/2018'
        
    },

    {
        'aluno': 'Maria Isabel Pereira',
        'data': '11/06/2018',
        'valor': 29.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Andre Luis Silva',
        'data': '12/06/2018',
        'valor': 34.99,
        'reembolso': null
        
    }

];

document.getElementById("vendas_cursos").innerHTML = "";

var soma = 0;
for(var i = 0 ;i<vendas_cursos.length ; i++ ){
    if(vendas_cursos[i].reembolso == null){
        

        var linhaHTML = "";
        linhaHTML += "<tr>";
        linhaHTML +=    "<td>"+vendas_cursos[i].aluno+"</td>";
        linhaHTML +=    "<td>"+vendas_cursos[i].data+"</td>";
        linhaHTML +=    "<td>"+vendas_cursos[i].valor+"</td>";
        linhaHTML += "</tr>";
        document.getElementById("vendas_cursos").innerHTML += linhaHTML
        soma += vendas_cursos[i].valor;
    }
}

document.getElementById("total_vendas").innerHTML = soma;




