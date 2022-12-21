//https://codepen.io/ng07/pen/oNLLGoo
// json
window.addEventListener('load', function() {  window.scroll(0, 0) })

// Web language 
let langJSON = {
  "en" : {
    "Hello"       : "Hello, I'm <span> Vicente Brisa Saez</span>",
    "Home"        : "Home",
    "AboutM"      : "Biography",
    "ContactM"    : "Contact",
    "Intro"       : "I'm Vicente Brisa Saez and <span class=\"typer\"></span>",
    "About"       : "<span>Biography</span><h3>About Me</h3>",
    "AboutText"   : "Hello! My name is <span>Vicente Brisa Saez</span>. "
                    + "A videogame programmer student from Spain. I aim to deepen my understanding "
                    + "in various areas of technology and development of both products and videogames.",
    "A"           : "A ",
    "Birthday"    : "Birthday: ",
    "Age"         : "Age: ",
    "Location"    : "Location: ",
    "Interesets"  : "<label>Interesets:</label> AI & Deep Learning",
    "Studying"    : "Studying: ",
    "Degree"      : "<label>Degree: </label> Video Game Design and Development",
    "Mail"        : "Mail: ",
    "Phone"       : "Phone: ",
    "Download"    : "Download CV",
    "Show"        : "Show CV",
    "Portfolio"   : "<span>Portfolio</span><h3>Featured Works</h3>",
    "Contact"     : "<span>Contact</span><h3>Get in Touch</h3>",
    "ContactDesc" : "I would be happy to further discuss my experiences with you, simply shoot me an email or message me on LinkedIn! :)",
    "Copy"        : "© 2022 Vicente Brisa Saez | Madrid, Spain",
    "Lang"        : "Español",
  },

  "es" : {
    "Hello"       : "Hola, Soy <span> Vicente Brisa Saez</span>",
    "Home"        : "Menu",
    "AboutM"      : "Biografía",
    "ContactM"    : "Contacto",
    "Intro"       : "Soy Vicente Brisa Saez y <span class=\"typer\"></span>",
    "About"       : "<span>Biografía</span><h3>Sobre mí</h3>",
    "AboutText"   : "Hola! Mi nombre es <span>Vicente Brisa Saez</span>. "
                    + "Un estudiante de programación de videojuegos en España. Mi objetivo es profundizar mi comprensión "
                    + "en diversas áreas de tecnología y desarrollo tanto de productos como de videojuegos.",
    "A"           : "Un ",
    "Birthday"    : "Cumpleaños: ",
    "Age"         : "Años: ",
    "Location"    : "Localización:   ",
    "Interesets"  : "<label>Intereses:</label> IA y Deep Learning",
    "Studying"    : "Estudiando: ",
    "Degree"      : "<label>Grado: </label> Diseño y Desarrollo de Videojuegos",
    "Mail"        : "Correo: ",
    "Phone"       : "Teléfono: ",
    "Download"    : "Descargar CV",
    "Show"        : "Mostrar CV",
    "Portfolio"   : "<span>Portfolio</span><h3>Trabajos Destacados</h3>",
    "Contact"     : "<span>Redes Sociales</span><h3>En Contacto</h3>",
    "ContactDesc" : "Estaría encantado de seguir discutiendo mis experiencias con usted, ¡Simplemente envíame un correo electrónico o un mensaje a mi LinkedIn! :)",
    "Copy"        : "© 2022 Vicente Brisa Saez | Madrid, España",
    "Lang"        : "English",
  }
}

// Typer web language 
let langJSONTyper = {
  "en" : {
    "1"  : "Videogame Programer Student.",
    "2"  : "Programming Enthusiast.",
    "3"  : "Fast Learner.",
    "easterEgg"  : "Fortnite Lover."
  },
  "es" : {
      "1"  : "Estudiante de Programación de Videojuegos.",
      "2"  : "Entusiasmado por la Programación.",
      "3"  : "Rápido Aprendiz.",
      "easterEgg"  : "Amante del Fortnite."
  }
}

// Projects web language 
let langJSONProjects = {
  "en" : {
    "Evil Seeker"   : "First proyect (Construct)",
    "Next Station"  : "Game Jam Madrid Crea, 3rd Edition (Unity/C#)",
    "Dragon s Power": "Sophomore project (Console app/C#)",
    "Blood Ties"    : "Sophomore project (Unity/C#)",
  },

  "es" : {
    "Evil Seeker"   : "Primer Proyecto (Construct)",
    "Next Station"  : "Game Jam Madrid Crea, 3ª Edición (Unity/C#)",
    "Dragon s Power": "Proyecto de segundo año (Aplicación de consola/C#)",
    "Blood Ties"  : "Proyecto de segundo año (Unity/C#)",
  }
}


// DarkMode web language 
let langJSONDarkMode = {
  "en" : {
    "Dark"   : "Dark Mode",
    "Light"  : "Light Mode",
  },

  "es" : {
    "Dark"   : "Modo Oscuro",
    "Light"  : "Modo Claro",
  }
}

// English - Spanish
let changeLangValue = false;

// run function after page load :: get/set localstorage value and run function
document.addEventListener("DOMContentLoaded", function() {
  let appLang = localStorage.getItem('lang');

  // if no language value saved in local-storage, set en as default
  if(appLang === null){
    appLang = 'es';
    localStorage.setItem('lang', appLang); // update local-storage
  }

  if(appLang === 'en'){
    changeLangValue = !changeLangValue;
  }
  
  // ContentUpdate functions with value from local-storage - en, es..
  contentUpdate(appLang); 
  contentUpdateTyping(appLang);
  contentUpdatePortfolio(appLang);
  contentUpdateDarkMode(appLang);
  
  // Start the text typing animation
  StartTextAnimation(0);

  // Other case
  // Select radiobutton which has data-value == local storage value
  // document.querySelector('[data-value="'+appLang+'"]').checked = true;
});

// Change innerhtml on lang input click
function changeLang(){
  changeLangValue = !changeLangValue;
  
  let langVal;
  if(changeLangValue)
    langVal = "en";
  else
    langVal = "es";

  // Set local-storage lang value from value given in langVal
  localStorage.setItem('lang', langVal);

  // ContentUpdates functions with value from langVal
  contentUpdate(langVal);
  contentUpdateTyping(langVal);
  contentUpdatePortfolio(langVal);
  contentUpdateDarkMode(langVal);
}

// Needed for protfolio_text.js
var currLang;

// content/innerhtml update/assign
function contentUpdate(cl){
  // get current langage contents in array
  currLang = Object.entries(langJSON)[Object.keys(langJSON).indexOf(cl)][1];

  // get current language content array length
  let langCont = Object.entries(currLang).length;

  for(let i = 0; i < langCont; i++){
    // get selectors which has .langchange classes
    let getSelector = document.querySelectorAll('.langchange')[i],
        // get data-key attribute from .langchange class selectors
        getAttr = getSelector.getAttribute('data-key');

    // assign the data-key value from current language array to the .langchange[data-key] selector
    getSelector.innerHTML = currLang[getAttr];
  }
}