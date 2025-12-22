//Query selectors
//element.querySelector(selector) - //returns a reference to the first match of selector.
//element.querySelectorAll(selectors) -// returns a “NodeList” containing references to all of the matches of the selectors.

//Element creation
//document.createElement(tagName, [options]) //- creates a new element of tag type tagName. [options]
//in this case means you can add some optional parameters to the function. Don’t worry about these at this point.

//This function does NOT put your new element into the DOM - it creates it in memory. This is so that you can manipulate the element (by adding styles, classes, ids, text, etc.) before placing it on the page. You can place the element into the DOM with one of the following methods.

//Append elements
//parentNode.appendChild(childNode) - appends childNode as the last child of parentNode.

//Adding inline style
// adds the indicated style rule to the element in the div variable
//div.style.color = "blue";

// adds several style rules
//div.style.cssText = "color: blue; background: white;";

// adds several style rules
//div.setAttribute("style", "color: blue; background: white;");
// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const ELementP = document.createElement("p");
ELementP.style.color = "red";
ELementP.textContent = "Hey I’m red!";
console.log(ELementP);
content.appendChild(ELementP);

const textBlue = document.createElement("h3");
textBlue.style.color = "blue";
textBlue.textContent = "I’m a blue h3!";
content.appendChild(textBlue);

const newDiv = document.createElement("div");
newDiv.style.background = "pink";
newDiv.style.border = " 1px solid black";

const myDiv = document.createElement("h1");
myDiv.textContent = "I’m in a div";

const meP = document.createElement("p");
meP.textContent = "ME TOO!";

content.appendChild(newDiv);
newDiv.appendChild(myDiv);
newDiv.appendChild(meP);
