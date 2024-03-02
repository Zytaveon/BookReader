const inputText = document.getElementById("userInput");
const outputText = document.getElementById("displayWord");

function letterCounter(){

    let input = new String(inputText.value);
    let letter;

    const letterMap = new Map();
    let currentValue;
    let sortSize = 5;
    let display = "";

    while(!input == ""){

        letter = getLetter(input);
        input = getRestWords(input);

        if(letterMap.get(letter) == undefined){
            letterMap.set(letter, 1);
        }

        else{
            currentValue = letterMap.get(letter);
            letterMap.set(letter, currentValue + 1);
        }

    }

    let array = [... letterMap.entries()].sort((a, b) => b[1] - a[1]);

    if(array.length < sortSize){
        sortSize = array.length;
    }

    for(let i = 0; i < sortSize; ++i){
        display = display + (i + 1) + ": " + array[i][0] + " ";
    }

    outputText.value = display;
}

function getLetter(words){
    let input = new String(words);

    return input.slice(0, 1);
}

function getRestWords(words){
    let input = new String(words);

    return input.slice(1);
}