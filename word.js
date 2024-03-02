
const outputLine = document.getElementById("displayWord");
const inputText = document.getElementById("userInput");

function wordCounter(){

    let input = inputText.value;

    let newWord;
    let restWords = new String(input);

    const wordMap = new Map();

    let currentVal;
    let displayOutput = "";

    //This while loop works
    while(!restWords == ""){

       newWord = getNewWord(restWords);
       restWords = getRestWords(restWords);

        //console.log(newWord);
        //console.log(restWords);

        if(wordMap.get(newWord) === undefined){
            wordMap.set(newWord, 1);
        }

        else{
            currentVal = wordMap.get(newWord);
            wordMap.set(newWord, currentVal + 1);
        }

    }

    let array = [...wordMap.entries()].sort((a, b) => b[1] - a[1]);

    let counter = 5;

    if(array.length < 5){
        counter = array.length;
    }

    for(let i = 0; i < counter; ++i){
        displayOutput = displayOutput  + (i + 1) + ": " + (array[i][0]) + " ";
        console.log(array[i][0]);
    }

    console.log(displayOutput);

    outputLine.value = displayOutput;

    //console.log(array);
    

    
    //console.log(newWord + " occured " + wordMap.get(newWord) + " times");

    //window.alert("We made it to the end");

}

function getNewWord(listOfWords){

    let restWords = new String(listOfWords);
    restWords = restWords.trim();
    let newWord;

    if(restWords.indexOf(" ") === -1){

        if(restWords.indexOf("\n") === -1){
            newWord = restWords;
            return newWord;
        }

        else{
            newWord = restWords.slice(0, restWords.indexOf("\n"));
            return newWord;
        }
    }

    if(restWords.indexOf("\n") === -1){
        newWord = restWords.slice(0, restWords.indexOf(" "));
        return newWord;
    }

    if(restWords.indexOf(" ") < restWords.indexOf("\n")){
        newWord = restWords.slice(0, restWords.indexOf(" "));
        return newWord;
    }

    newWord = restWords.slice(0, restWords.indexOf("\n"));
    return newWord;
    
}

function getRestWords(listOfWords){

    let restWords = new String(listOfWords);
    let newList;

    if(restWords.indexOf(" ") === -1){
        if(restWords.indexOf("\n") === -1){
            return "";
        }

        newList = restWords.slice(restWords.indexOf("\n") + 1);
        return newList.trim();
    }

    if(restWords.indexOf("\n") === -1){
        newList = restWords.slice(restWords.indexOf(" ") + 1);
        return newList.trim();
    }

    if(restWords.indexOf(" ") < restWords.indexOf("\n")){
        newList = restWords.slice(restWords.indexOf(" ") + 1);
        return newList.trim();
    }

    newList = restWords.slice(restWords.indexOf("\n") + 1);
    return newList.trim();
}
