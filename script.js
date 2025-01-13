function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function date() {
  let x;
  x = date();
  document.getElementById("date").value;
}

function populateEmail() {
  const userEmail = "mdrakibislam719@gmail.com"; // Replace this with the desired email address
  window.location.href = `mailto:${userEmail}`;
}
