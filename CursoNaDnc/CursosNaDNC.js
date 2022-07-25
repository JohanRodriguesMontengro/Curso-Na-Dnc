var Continuar = "S"

while(Continuar == "S"){
    Continuar = "N"
    var Verifier = "S"
   alert('Seja bem-vindo ao site de venda de cursos na DNC')
    alert(`O senhor(a) poderá escolher apenas um curso:
        1. Formação Em Dados = R$ 20.000,00 
        2. Formação Em Projetos = R$ 15.000,00 
        3. Formação Em Marketing = R$ 13.000,00 
        4. Formação Em Produto = R$ 18.000,00 
        5. Formação Em Tecnologia = R$ 19.000,00`)
    while (Verifier == "S") {
        var ChosenCourse = prompt(` Os cursos e seus preços abaixo escolha somente um:
        1. Formação Em Dados = R$ 20.000,00 
        2. Formação Em Projetos = R$ 15.000,00 
        3. Formação Em Marketing = R$ 13.000,00 
        4. Formação Em Produto = R$ 18.000,00 
        5. Formação Em Tecnologia = R$ 19.000,00`, "Digite somente um número")
        
        if(isNaN(ChosenCourse) || ChosenCourse >= 6 || ChosenCourse <= 0){
            alert(` Digite um valor correspondente a um curso de nossas formações:
            1. Formação Em Dados = R$ 20.000,00 
            2. Formação Em Projetos = R$ 15.000,00 
            3. Formação Em Marketing = R$ 13.000,00 
            4. Formação Em Produto = R$ 18.000,00 
            5. Formação Em Tecnologia = R$ 19.000,00`)
        }
        switch(parseInt(ChosenCourse)){
            case 1:
                alert('Você escolheu o curso Formação Em Dados no valor de R$ 20.000,00 que começará no proximo mês')
                Verifier = "N"
                break;
            case 2:
                alert('Você escolheu o curso Formação Em Projetos no valor de R$ 15.000,00 que começará no proximo mês')
                Verifier = "N"
                break;
            case 3:
                alert('Você escolheu o curso Formação Em Marketing no valor de R$ 13.000,00 que começará no proximo mês')
                Verifier = "N"
                break;
            case 4:
                alert('Você escolheu o curso Formação Em Produto no valor de R$ 18.000,00 que começará no proximo mês')
                Verifier = "N"
                break;
            case 5:
                alert('Você escolheu o curso Formação Em Tecnologia no valor de R$ 19.000,00 que começará no proximo mês')
                Verifier = "N"
                break;
        }  
   }
   Continuar = prompt('Deseja escolher outro curso? [S]im ou [N]ão', 'Digite em letras maiúscula')
}
// Copie e cole este código no DevTolls de seu navegador
