const users = [
  { username: 'rotz', password: '1234' },
  { username: 'rotz1', password: '1234' },
  { username: 'rotz2', password: '1234' }
];

const login = () => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const user = users.find(u => u.username === username && u.password === password);
  
  if (user) {
    alert('Iniciaste Sesion!');
    window.location = "index.html";
  } else {
    alert('Datos incorrectos');
  }
};

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

