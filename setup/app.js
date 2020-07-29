



const printToDom =(divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId)
    selectedDiv.innerHTML =textToPrint
}


const handleButtonClick = (e) => {
    const buttonId = e.target.type;

    const bodySelector = document.querySelector("body")


}
const colorBuilder = (monkeyButts) => {
    let domString = '';
    for(let i = 0; i < monkeyButts.length; i++){
        domString += `<div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">${monkeyButts[i].color}</h1>
        </div>
      </div>`
    }
    const buttonId = e.target.type;

    const bodySelector = document.querySelector("body")

    if(buttonId === "button2"){
        bodySelector.style.backgroundColor = ${monkeyButts[i].color};
    }
    else if(buttonId === "button1"){
        bodySelector.style.backgroundColor = ${monkeyButts[i].hex};

    }
  

    printToDom("color-flip", domString);
}







const init = ()=>{
    colorBuilder();
}

'use strict';


const simplePalette = [
    {
        color: 'beige',
    },

    {
        color: 'salmon',
    },

    {
        color: 'teal',
    },

    {
        color: 'goldenrod',
    
    },

    {
        color: 'purple',
    },

    {
        color: 'rust red',
    },

    {
        color: 'chartreuse',
    },

    {
        color: 'azure',
    },

    {
        color: 'peach',    
    },

    {
        color: 'aqua',
    },
]
 master
