
const outputLine = document.getElementById("displayWord");
const inputText = document.getElementById("userInput");

function wordCounter(){

    let input = inputText.value;

    let newWord;
    let restWords = new String(input);

    //Should get rid of whitespace at the end
    restWords = restWords.trim();

    /* This while loop works
    while(!restWords == ""){

        if(restWords.indexOf(" ") == -1){
            newWord = restWords;
            restWords = "";
        }

        else{
            newWord = restWords.slice(0, restWords.indexOf(" "));
            restWords = restWords.slice(restWords.indexOf(" ") + 1);
        }


    }
    */

    newWord = getNewWord(restWords)

    console.log(newWord);
    console.log(restWords);

    newWord = getNewWord(restWords)

    console.log(newWord);
    console.log(restWords);

    //window.alert("We made it past the while");

}

function getNewWord(listOfWords){

    let restWords = new String(listOfWords);
    let newWord;

    newWord = restWords.slice(0, restWords.indexOf(" "));
    restWords = restWords.slice(restWords.indexOf(" ") + 1);

    return newWord;

}
