function dadoAleatorio(numOfSides) {
    let numberDice = (parseInt((Math.random() * numOfSides) + 1));
    return numberDice;
}