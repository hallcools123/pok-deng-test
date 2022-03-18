exports.cardValue = (card) => {
    let result;
    const value = card.substring(card.indexOf('-') + 1);
    if(parseInt(value)){
        result = parseInt(value)
    }else{
        if(value == 'Ace'){
            result = 1;
        }else{
            result = 0;
        }
    }
    return result;
}

exports.sumValue = (card1,card2) =>{
    let result;
    result = card1 + card2;
    if(result >= 10){
        result -= 10;
        if(result == 10){
            result = 0;
        }
    }
    return result;
}