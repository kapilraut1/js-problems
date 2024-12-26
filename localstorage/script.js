if (localStorage.getItem("name")) {
  let a = localStorage.getItem("name");
  document.write(a);
} else {
  let a = prompt("Enter a name");
  localStorage.setItem("name", a);
  document.write(a);
}
