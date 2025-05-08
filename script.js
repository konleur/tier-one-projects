const toggleClick = document.getElementById('toggleIcon');

if (localStorage.getItem("theme") == "dark") {
  document.body.classList.add('dark-mode');
  document.getElementById('toggleIcon').src = "images/website_white_icon.png"; 
}

toggleClick.addEventListener("click", changeIcon);
toggleClick.addEventListener("click",  darkWhiteMode);

function changeIcon() {
  let img = document.getElementById('toggleIcon');
  img.src = (img.src.includes("images/website_white_icon.png")) ? "images/website_dark_icon.png" : "images/website_white_icon.png"; 
}

function darkWhiteMode() {
  const list = document.body.classList; 
  list.toggle("dark-mode"); 
  localStorage.setItem("theme", list.contains("dark-mode") ? "dark" : "white");  
}







localStorage.setItem("name", "Alex Lee");
console.log(localStorage.getItem("name"));