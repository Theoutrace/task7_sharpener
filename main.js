

//==================================================task 7================================================
//traversing the DOM //   //for line 25 : <ul id="items" class="list-group"> in index.html
var itemList = document.querySelector('#items')
//parentNode property being used
// console.log(itemList.parentNode); // parent is <div> with id="main"
// itemList.parentNode.style.backgroundColor = '#f4f4f4'   //this changed the parent node 
// console.log(itemList.parentNode.parentNode); // parent is <div> with class="container"

//ParentElement //
// parentNode property being used
// console.log(itemList.parentElement); // parent is <div> with id="main"
// itemList.parentElement.style.backgroundColor = '#f4f4f4'   //this changed the parent node 
// console.log(itemList.parentElement.parentElement.parentElement); // parent is <body> //


//childNodes //  //suggested not to use// rather use children property in place of child property
// console.log(itemList.childNodes);    

//children //
// console.log(itemList.children);
// console.log(itemList.children[1])
// itemList.children[1].style.backgroundColor = 'yellow'

// //property Firstchild //  //called firstchild as useless //
// console.log(itemList.firstChild);


// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';


//lastChild
// console.log(itemList.lastChild);


// // lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

//nextSibling //
// console.log(itemList.nextSibling);

//nextElementSibling //
// console.log(itemList.nextElementSibling); //prints null because it doesn't have any nextSibling but have all siblings before it
//if we put a span <span></span> after next sibling then it will show next sibling 
//gave span as next sibling after it.

//previousSibling
// console.log(itemList.previousSibling);


// //previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green'   //colored 'items' text above item 1.


///creating DOM elements and insert them ===========================================================
//create elements
// create a div //
var newDiv = document.createElement('div');
// Add class name
newDiv.className = 'hello'
// console.log(newDiv);
// Add id name
newDiv.id = 'hello1'
// console.log(newDiv);
// Add attribute
newDiv.setAttribute('title','Hello Div')
// console.log(newDiv);


//if we want to add content in between div tag   like <div>content</div>
//create a text node
var newDivText = document.createTextNode('Hello World')  
// now we append it to our div //
// Add text to div
newDiv.appendChild(newDivText)

//till now it is just inside the javaScript
//we need to insert into the DOM 
// first need to select where we need to put it 
//putting in header below div with class = container

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);
container.insertBefore(newDiv,h1)

//===========================================
var myDiv = document.createElement('div')
myDiv.className = 'hello'
myDiv.id = 'hello1'
myDiv.setAttribute('title', 'HelloDiv')
var myDivText = document.createTextNode('Hello World')
myDiv.appendChild(myDivText)
var myContainer = document.querySelector('div .title')
var myh1 = document.querySelector('ul list-group')
myDiv.style.fontSize = '15px'
myContainer.insertBefore(myDiv, myh1)

