// Lấy tên từ localStorage
//const username= localStorage.getItem('userButton');

let userlocal = JSON.parse(localStorage.getItem("userlogin")) || [];
// let rolelocal = JSON.parse(localStorage.getItem("userlogin")) || [];
//console.log(userlocal.name).userlocal;
// document.getElementById('userButton').textContent = userlocal.name;
// document.getElementById('userButton').textContent = rolelocal.role;
// let userlocal = JSON.parse(localStorage.getItem("userlogin")) || [];
document.getElementById('userButton').innerHTML = `
  <span class="username">${userlocal.name}</span>
  <span class="role">${userlocal.role}</span>
`;

