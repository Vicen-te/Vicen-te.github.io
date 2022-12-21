/* btn class list */
const btn = document.querySelectorAll(".btn");

/* for each btn class */
btn.forEach(element => {
    let rippleDiv;
    
    //On mouse enter
    //We create a listener that takes the event
    element.addEventListener("mouseenter", (e) => {
        //Get the coordinates of the cursor
        const left = e.clientX - e.target.getBoundingClientRect().left;
        const top = e.clientY - e.target.getBoundingClientRect().top;

        //Creates the div
        rippleDiv = document.createElement("div");
        rippleDiv.classList.add("ripple");
        rippleDiv.style.left = `${left}px`;
        rippleDiv.style.top = `${top}px`;

        element.prepend(rippleDiv);
    });

    //On mouse leave
    //We create a listener
    element.addEventListener("mouseleave", () => {
        //Remove the div
        element.removeChild(rippleDiv);
    });
    
});