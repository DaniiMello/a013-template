// const idadeDoDependente = 15
// if (idadeDoDependente>=13 && idadeDoDependente<=17){
//     console.log ("Seu dependente já pode ter um cartão de crédito vinculado ao seu!");
// }else{
//     console.log ("Consulte outras possibilidades do Labank");
// }

// if (idadeDoDependente>=13) {
//     if(idadeDoDependente<=17){
//     console.log ("Seu dependente já pode ter um cartão de crédito vinculado ao seu!");
//     } else {
//     console.log ("Consulte outras possibilidades do Labank");
// }
// } else {
//     console.log ("Consulte outras possibilidades do Labank");
// }

// idadeDoDependente===13 ? console.log("A idade do dependente é 13 e ja pode ter um cartão") : console.log ("Verifique as opções possiveis")

// const ramal = 3
// switch (ramal) {
//     case 1:
//         console.log("Fácil");
//         break;
//     case 2:
//         console.log("Black");
//         break;
//     case 3:
//         console.log("Platinum");
//         break;
//     case 4:
//         console.log("Master Gold");

//     default:
//         console.log("Escolha uma das quatro opções disponíveis")
//         break;
// }

const divisivel = Number(prompt ("Digite um número"))
divisivel===30?console.log("UFA ACERTEI"): console.log("não foi dessa vez")
    switch (divisivel) {
        case 6:
            console.log ("O número digitado é ", (divisivel))
            break;
            case 12:
                console.log ("O número digitado é ", (divisivel))
                break;
                case 18:
                    console.log ("O número digitado é ", (divisivel))
                    break;
                    case 24:
                        console.log ("O número digitado é ", (divisivel))
                        break;
                        case 30:
                            console.log ("O número digitado é ", (divisivel))
                            break;
    
        default:
            console.log ("o número é maior que 30 ou menor que 6")
            break;
    }
if (divisivel%2===0 && divisivel%3===0) {
    console.log("Este número é divisivel por 2 e 3") 
}else {
 console.log ("Este número não é divisivel por 2 e 3")
}
 