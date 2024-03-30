function livebanner() {
    console.log("running livebanner")
    let banner = document.querySelector("[data-banner]").querySelector("[livebanners]");

    let activebanner = banner.querySelector("[data-active]")

    let newIndex = [...banner.children].indexOf(activebanner) + 1;

    if(newIndex<0) newIndex=banner.children.length - 1;
    if(newIndex >= banner.children.length) newIndex = 0;

    banner.children[newIndex].dataset.active = true;
    
    delete activebanner.dataset.active;

}

setInterval(livebanner, 3000);