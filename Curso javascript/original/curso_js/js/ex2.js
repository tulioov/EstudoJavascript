//ex1
var num1 = document.getElementById("num_1").innerHTML;
var num2 = document.getElementById("num_2").innerHTML;
document.getElementById("resultado").innerHTML ="<strong>"+parseInt(num1) + parseInt(num2)+"</stron>";

//ex2
var celsius = document.getElementById("caixa_azul").innerHTML;
celsius = parseInt(celsius);
var resultado = (9*(celsius/5))+32;
document.getElementById("caixa_amarela").innerHTML = (resultado).toFixed(2);

//ex3  Forme um novo array composto pelos 2 últimos elementos do array abaixo.
//Em seguida adicione ao final do novo array mais um grupo composto pelos alunos "Mariana", "Felipe" e "Carla".
var grupos = [ 
    [ "João" , "Maria" ],
    [ "Pedro" , "Joana", "André", "Júlio" ],
    [ "Carolina" , "Helena", "Marcelo" ]
];
console.log(grupos);
var grupoNovo = [  
    grupos[1],
    grupos [2],
    ["Mariana", "Felipe", "Carla"]
];
console.log(grupoNovo);

//ex 4 

var curso = {
    'titulo': "Aprenda programação em Python",
    'categoria': ['programação', 'tecnologia', 'python'],
    'n_aval_5_estrelas': 420,
    'n_aval_4_estrelas': 80,
    'n_aval_3_estrelas': 33,
    'n_aval_2_estrelas': 20,
    'n_aval_1_estrela': 4
}

document.getElementById("categoria_principal").innerHTML = curso.categoria;

document.getElementById("total_aval").innerHTML = curso.n_aval_1_estrela
                                                + curso.n_aval_2_estrelas
                                                + curso.n_aval_3_estrelas   
                                                + curso.n_aval_4_estrelas
                                                + curso.n_aval_5_estrelas;
document.getElementById("media_aval").innerHTML = document.getElementById("total_aval").innerHTML / 5;

//ex5

var pessoa = {

    "nome":"tulio",
    "sobrenome":"vasconcellos",
    "email":"tulioov@gmail.com"
}



function html (pessoa){

    var templateTable = '<div class="tableBox">'
    templateTable +=        '<table>'
    templateTable +=            '<tr>'
    templateTable +=                '<th>Nome Completo</th>'
    templateTable +=                '<th>Email</th>'
    templateTable +=            '</tr>'
    templateTable +=            '<tr>'
    templateTable +=                '<td>'+pessoa.nome+' '+pessoa.sobrenome+'</td>'
    templateTable +=                '<td>'+pessoa.email+'</td>'
    templateTable +=            '</tr>'
    templateTable +=        '</table>'
    templateTable +=    '</div>'

    return templateTable;

};

document.getElementById("tabela").innerHTML=html(pessoa);
