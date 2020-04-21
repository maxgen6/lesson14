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
        elem.className = this.selector; 
        console.log(elem);
    } else if (this.selector[0] === '#'){
        elem = document.createElement('p');
        elem.id = this.selector;
        console.log(elem);
    }
    'height:' + this.height + 'px;';
    'width:' + this.width + 'px;';
    'bg:' + this.bg;
    'fontSize:' + this.fontSize + 'px;';
    console.log(this.height);
    console.log(text);
}

const element = new DomElement('.elem',  150, 50, 'red', 25);
const element2 = new DomElement('#elem', 150, 50, 'green', 25);
console.log(element);
console.log(element2);

element.createElement('Hello');
element2.createElement('Hi, friend!');