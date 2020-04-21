'use strict';

const DomElement = function(selector, height, width, bg, fontSize){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.createElement = function(text){
    // selector = prompt('Enter the string');
    let elem = null;
    
    if (this.selector[0] === '.'){
        elem = document.createElement('div');
        elem.className = this.selector.slice(1); 
        elem.textContent = text;
        console.log(elem);
    } else if (this.selector[0] === '#'){
        elem = document.createElement('p');
        elem.id = this.selector.slice(1);
        elem.textContent = text;
        console.log(elem);
    }
    elem.style.cssText = `height: ${this.height}px;
    width: ${this.width}px;
    background-color: ${this.bg};
    fontSize: ${this.fontSize}px;`;
    
    console.log(this.height);
    console.log(text);
    document.body.append(elem);
}

const element = new DomElement('.elem',  150, 50, 'red', 25);
const element2 = new DomElement('#elem', 150, 50, 'green', 25);
console.log(element);
console.log(element2);

element.createElement('Hello');
element2.createElement('Hi, friend!');