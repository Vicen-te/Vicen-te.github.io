let dataText = [];
let easterEgg = "";
let originalText = [];
const actualText =  document.getElementsByClassName("typer");


function GetOriginalText(){
    for(let j = 0; j < actualText.length; ++j){
        originalText.push(actualText[j].innerHTML);
    }
}

//Get text from all typer classes
function GetOriginalText(text){
    originalText = [];
    for(let j = 0; j < actualText.length; ++j){
        if(actualText[j].classList.contains("langchange")){
            originalText.push(text[actualText[j].getAttribute("data-key")]);
        }
        else
            originalText.push("");
    }
}

// Type one text in the typwriter
// Keeps calling itself until the text is finished
function typeWriter(text, i, fnCallback, returnText) {
    // check if text isn't finished yet
    if (i <= text.length && returnText == false) {
        let returnT = false;
        
        if(i == text.length)
            returnT = true;
        AddNextCharacter(text, i, fnCallback, returnT, 1, 100);
    }
    else if(i >= 0 && returnText == true){
        AddNextCharacter(text, i, fnCallback, true, -1, 30);

        // Text finished, call callback if there is a callback function
        if(i == 0 && typeof fnCallback == 'function'){
            returnText = false;
            // call callback after timeout
            setTimeout(fnCallback, 800);
        }
    }
}

function AddNextCharacter(text, i, fnCallback, returnText, add, timeout){
    for(let j = 0; j < actualText.length; ++j){
        // Add next character to typer
        actualText[j].innerHTML = originalText[j] + text.substring(0, i + add);
    }
                    
    // Wait for a while and call this function again for next character
    setTimeout(function() {
        typeWriter(text, i + add, fnCallback, returnText)
    }, timeout);
}

// Start a typewriter animation for a text in the dataText array
function StartTextAnimation(i) {
    if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
            StartTextAnimation(0);
        }, 1000);
    }
    // check if dataText[i] exists
    else if (i < dataText[i].length) {
        let n = Math.floor(Math.random() * 100);
        GetOriginalText(currLang);

        // Easter Egg Fortnite
        if(n == 0){
            // Text exists! start typewriter animation
            typeWriter(easterEgg, 0, function(){
                // After callback (and whole text has been animated), start next text
                StartTextAnimation(i);
            }, false);
        }
        else{
            // Wext exists! start typewriter animation
            typeWriter(dataText[i], 0, function(){
                // After callback (and whole text has been animated), start next text
                StartTextAnimation(i+1);
            }, false);
        }
    }
}

function contentUpdateTyping(cl){
    let currLangTyping = Object.entries(langJSONTyper)[Object.keys(langJSONTyper).indexOf(cl)][1],
        // Get current language content array length
        langCont = Object.entries(currLangTyping).length;

    dataText = [];
    easterEgg = null;

    for(let i = 1; i < langCont; i++){
        dataText.push(currLangTyping[i]);
    }
    easterEgg = currLangTyping["easterEgg"];
}