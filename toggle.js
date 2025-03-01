const bar = document.getElementById("bar");
const menu = document.getElementById("menu");

if(bar){  // USING IF STATEMENT HERE BECAUSE IT GOOD PRACTICE IF THE ELEMENT IS NOT FOUND IN THE DOM, TRYING TO ADD AN EVENT LISTENER TO null WOULD CAUSE AN ERROR
    bar.addEventListener("click", ()=>{
        menu.classList.toggle("active");
    });
}

