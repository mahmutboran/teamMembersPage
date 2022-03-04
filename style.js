let darkSwitch = document.querySelector(".form-check-input");
let container = document.querySelector(".container-fluid")

darkSwitch.addEventListener("change",(e)=>{
    if (e.target.checked) {
        container.removeAttribute("class")
        container.setAttribute("class","bg-dark text-white")
    }else{
        container.setAttribute("class","container-fluid bg-secondary bg-opacity-10 " )
    }
  
})