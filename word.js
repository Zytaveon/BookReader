
const outputLine = document.getElementById("displayWord");
const inputText = document.getElementById("userInput");

function wordCounter(){

    let input = inputText.value;

    let newWord;
    let restWords = new String(input);

    //This while loop works
    while(!restWords == ""){

       newWord = getNewWord(restWords);
       restWords = getRestWords(restWords);

        console.log(newWord);
        console.log(restWords);
    }
    

    


    window.alert("We made it past the while");

}

function getNewWord(listOfWords){

    let restWords = new String(listOfWords);
    restWords = restWords.trim();
    let newWord;

    if(restWords.indexOf(" ") === -1){

        if(restWords.indexOf("\n") == -1){
            newWord = restWords;
            return newWord;
        }

        else{
            newWord = restWords.slice(0, restWords.indexOf("\n"));
            return newWord;
        }
    }

    if(restWords.indexOf("\n") == -1){
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

    if(restWords.indexOf(" ") == -1){
        if(restWords.indexOf("\n") == -1){
            return "";
        }

        newList = restWords.slice(restWords.indexOf("\n") + 1);
        return newList.trim();
    }

    if(restWords.indexOf("\n") == -1){
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
