const searchBtn = document.querySelector(".form-inline img");

searchBtn.addEventListener("click",()=> {
    const input = document.querySelector(".form-control");
    input.classList.toggle("active");
    input.focus();
    input.value = "";
});



const arrowBtn = document.querySelector(".hide a img");
let flag = false;

arrowBtn.addEventListener("click",()=>{
    const leftMenu = document.querySelector(".left-menu");
    const text = document.querySelector(".text");

    if(!flag){
        leftMenu.style.left = "-140px";
        text.textContent = "menu";
        arrowBtn.src ="images/side-menu-2.png";
        flag = true;
    }
    else if (flag){
        leftMenu.style.left = "0";
        text.textContent = "";
        arrowBtn.src ="images/side-menu-1.png";
        flag = false;
    }
    
});
