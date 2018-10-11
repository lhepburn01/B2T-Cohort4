console.log('Hello from external')

let user = prompt('Enter Name');

console.log('Welcome ' + user);

let messageH1 = document.getElementById('message');

messageH1.innerHTML = 'Welcome ' + user;

let userColor = prompt('Enter Color');
messageH1.style.color = userColor;