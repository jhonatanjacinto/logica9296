// pede números com precisão decimal para o usuário
function pegaFloat(mensagem)
{
    return parseFloat(prompt(mensagem).replace(',', '.'))
}


// pede números inteiros para o usuário
function pegaInt()
{
    return parseInt(prompt(mensagem).replace(',', '.'))
}

