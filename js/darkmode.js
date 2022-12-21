const night = document.getElementById('dark');
const textName = document.getElementById('toggle');
const icons = document.getElementById('dark_icons').children;
const _html = document.getElementsByTagName('html')[0];

let darkModeText = [];

function setActive(mode){
    if(mode){
        _html.classList.add('darkmode'); 
        textName.innerHTML = darkModeText.Light;

        icons[1].style.display = "inline";
        icons[0].style.display = "none";

        night.checked = true;
        //console.log("dark");
    }
    else{
        _html.classList.remove('darkmode');
        textName.innerHTML = darkModeText.Dark;

        icons[0].style.display = "inline";
        icons[1].style.display = "none";

        night.checked = false;
        //console.log("light");
    }
}

function getConfig(){
    if (localStorage.getItem("darkMode") != null){
        let getDark = localStorage.getItem("darkMode");
        getDark == 'true' ? setActive(true) :  setActive(false);
    }
    else{
        localStorage.setItem("darkMode", true); 
        setActive(true);
    }
}

function darkMode(change){
    localStorage.setItem("darkMode",change);
    setActive(change);
}

night.addEventListener('change', function(){darkMode(night.checked)}, false);

/* Check localStorage 
function checkBrowser(){
    if ('localStorage' in window && window['localStorage'] !== null)
        return true;
    else
        return false;
}*/

function contentUpdateDarkMode(cl){
    // Get current language contents in array
    darkModeText = Object.entries(langJSONDarkMode)[Object.keys(langJSONDarkMode).indexOf(cl)][1];
    // Change options
    getConfig();    
}