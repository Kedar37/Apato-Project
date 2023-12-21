const bannerbtn = document.querySelectorAll('.bannerbtn');

bannerbtn.forEach(btn => {
    btn.addEventListener('click', () => {
        let offset = btn.dataset.bannerBtn === 'next'?1:-1;

        let banner = btn.closest("[data-banner]").querySelector("[livebanners]");
        let bannerpos = btn.closest("[data-banner]").querySelector("[bannerposwraps]");

        let activebanner = banner.querySelector("[data-active]")
        let activepos = bannerpos.querySelector("[data-active]");

        let newIndex = [...banner.children].indexOf(activebanner) + offset;
        let posnewIndex = [...bannerpos.children].indexOf(activepos) + offset;
        
        if(newIndex<0) newIndex=banner.children.length - 1;
        if(newIndex >= banner.children.length) newIndex = 0 
        if(posnewIndex<0) posnewIndex=banner.children.length - 1;
        if(posnewIndex >= banner.children.length) posnewIndex = 0 

        banner.children[newIndex].dataset.active = true;
        bannerpos.children[posnewIndex].dataset.active = true;
        delete activebanner.dataset.active;
        delete activepos.dataset.active;

    })
})