const menubtn = document.querySelector(".menubtn");
const menulists = document.querySelector(".menulists")
        menubtn.addEventListener('click', ()=>{
            if(menulists.style.display == "none") {
                menulists.style.display = "block"
            }else{
                menulists.style.display = "none"
            }
        })
