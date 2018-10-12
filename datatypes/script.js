console.log('Hello from external')

let user = prompt('Enter Name');

console.log(user);

let messageH1 = document.getElementById('message');

messageH1.innerHTML = user;

let userColor = prompt('Enter Color');
messageH1.style.color = userColor;