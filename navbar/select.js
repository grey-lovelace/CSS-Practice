const indicator = document.getElementById("indicator");

document.addEventListener("click", e => {
    let anchor = e.target;
    if(!anchor.matches("a")){
        anchor = anchor.closest("a")
    }

    if(anchor != null){
        const linkElements = Array.from(document.querySelectorAll("a"))
        linkElements.forEach(linkElement => {
            linkElement.classList.remove("active")
        })
        anchor.classList.add("active")
        indicator.style.setProperty("--link-index", linkElements.indexOf(anchor))
        indicator.style.setProperty("opacity", 1)
    }
});