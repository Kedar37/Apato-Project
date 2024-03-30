const radio = document.querySelectorAll(".radio")
const label = document.querySelectorAll(".options > .option-label")

    radio.forEach(r => {
        r.addEventListener("change",(e)=>{
            label.forEach(lb => {
                if(lb.classList.contains("active-option")){
                lb.classList.remove("active-option")
                    console.log("work")
                }
            });
        e.target.labels[0].classList.add("active-option")
    })
});