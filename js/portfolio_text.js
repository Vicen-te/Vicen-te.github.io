const title = document.getElementsByClassName("entry");
const portfolioTitle = document.getElementsByClassName("portfolio_titles");

function UpdateMouse(title){
    title.style.top = `${event.clientY+10}px`; 
    title.style.left = `${event.clientX+10}px`;
}

function SetValues(){
    Object.values(title).forEach(element => {
        // Set events
        var title;
        var description;
        
        element.addEventListener("mouseover", function(){
            title = element.getAttribute("data-title");
            description = element.getAttribute("data-description");
            portfolioTitle[0].classList.add('visible');
        });
        element.addEventListener("mousemove", function(){
            portfolioTitle[0].innerHTML = title + "<span>" + description + "</span>";
            UpdateMouse(portfolioTitle[0]);
        });
        element.addEventListener("mouseout", function(){
            portfolioTitle[0].classList.remove('visible');
        });
    })
}

document.addEventListener("DOMContentLoaded", function() {
    SetValues();
});

function contentUpdatePortfolio(cl){
  // Get current language contents in array
  let currLangProj = Object.entries(langJSONProjects)[Object.keys(langJSONProjects).indexOf(cl)][1],
    // Get current language content array length
    langContProj = Object.entries(currLangProj).length;

  for(let i = 0; i < langContProj; i++){
    // Get selectors which has .langchange classes
    let getSelector = document.querySelectorAll('.langchange2')[i],
        // Get data-title attribute from .langchange class selectors
        getAttr = getSelector.getAttribute('data-title');
    // Assign the data-description value from current language array to the .currLangProj[data-description] selector
    getSelector.setAttribute("data-description", currLangProj[getAttr]);
  }
  SetValues();
}