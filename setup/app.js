 mainjs




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




 hex
// #c9cba3 - #ffe1a8 - #e26d5c - #723d46 - #472d30
// #484a47 - #5c6d70 - #a37774 - #e88873 - #e0ac9d
"use strict";

const hexPalette = [ 
    {
        hex: "#c9cba3",
        nameOfHex: "Olive Green"
    },
    {
        hex: "#ffe1a8",
        nameOfHex: "Chill Yellow"
    },
    {
        hex: "#e26d5c",
        nameOfHex: "Burnt Orange"
    },
    {
        hex: "#723d46",
        nameOfHex: "Maroon Vibe"
    },
    {
        hex: "#472d30",
        nameOfHex: "Deep Maroon"
    },
    {
        hex: "#484a47",
        nameOfHex: "Serious Grey"
    },
    {
        hex: "#5c6d70",
        nameOfHex: "Call me Graybe"
    },
    {
        hex: "#a37774",
        nameOfHex: "Raw Tuna"
    },
    {
        hex: "#e88873",
        nameOfHex: "Hipster Orange"
    },
    {
        hex: "#e0ac9d",
        nameOfHex: "Plain Playdough"
    }

]
 master




 mainjs
const init = ()=>{
    colorBuilder();
}

 master

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
