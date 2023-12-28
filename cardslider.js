const sliderbtn = document.querySelectorAll('.sliderbtn');

sliderbtn.forEach(btn => {
    btn.addEventListener('click', () => {
        let offset = btn.dataset.slideBtn === 'next'?1:-1;

        let cardslide = btn.closest("[data-slide]").querySelector("[livecardslide]");
        let sliderpos = btn.closest("[data-slide]").querySelector("[sliderposwraps]");

        let activeslide = cardslide.querySelector("[data-active]")
        let activenav = sliderpos.querySelector("[data-active]");

        let newcardIndex = [...cardslide.children].indexOf(activeslide) + offset;
        let navnewIndex = [...sliderpos.children].indexOf(activenav) + offset;
        
        if(newcardIndex<0) newcardIndex=cardslide.children.length - 1;
        if(newcardIndex >= cardslide.children.length) newcardIndex = 0 
        if(navnewIndex<0) navnewIndex=cardslide.children.length - 1;
        if(navnewIndex >= cardslide.children.length) navnewIndex = 0 

        cardslide.children[newcardIndex].dataset.active = true;
        sliderpos.children[navnewIndex].dataset.active = true;
        delete activeslide.dataset.active;
        delete activenav.dataset.active;

    })
})