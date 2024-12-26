let btn = document.querySelector("button");
let par = document.getElementById("not");

btn.addEventListener("click", () => {
    if(localStorage.getItem("note")){
        par.innerText= `The notes you saved is ${localStorage.getItem("note")}`;
    }
    else{
        let a= prompt("Please enter the important notes");
        localStorage.setItem("note", a);
         par.innerText= `Hola ${a}`;
    }
});
