let main = document.createElement('main');
main.className = 'mainClass';
main.className = 'check';
main.className = 'item';
document.body.append(main);

let myDiv = document.createElement('div');
myDiv.id = 'myDiv';

main.append(myDiv);

let paragraph = document.createElement('p');
let paragraphText = document.createTextNode('First paragraph');

myDiv.append(paragraph);
paragraph.append(paragraphText);