const cards = document.querySelector(".cards")
const btn = document.querySelectorAll(".btn")

function scrollleft() {
    let sl = 0;
    console.log("cards length ", cards.children.length)
    if(cards.children.length === 5) {
        sl = 162
    }else if(cards.children.length > 5) {
        sl = 162 + ((cards.children.length - 5) * 180)
    }
    return sl;
}

btn[0].disabled = true;
cards.addEventListener("scroll", (e)=>{
    // console.log(cards.scrollLeft)
    if(cards.scrollLeft === 0) {
        btn[0].disabled = true;
    }else{
        btn[0].disabled = false;
    }
    console.log("caculated ", scrollleft(), "not cacul ", cards.scrollLeft)
    if(scrollleft() === Math.floor(cards.scrollLeft)) {
        btn[1].disabled = true;
        console.log("true")
    }else{
        btn[1].disabled = false;
        console.log("false")

    }
})


btn.forEach(b => {
    
    b.addEventListener("click", (e)=>{
        if(b.classList[1] === "next"){
            cards.scrollLeft += 180
            console.log("next")
        }else{
            cards.scrollLeft -= 180
            console.log("prev")
        }
        
    })
});