const navlinks = document.querySelectorAll(".doc_comp_link");

console.log("length",navlinks.length);

let temp;

navlinks.forEach((link) => {
    link.addEventListener('click', function (event) { 
        event.preventDefault();
        if(link && link.classList.contains("active_component_link")) {
            temp = link;
            console.log(temp)
        }
        if(link && (link.classList.contains("active_component_link") === false)) {
            if(temp) {
                temp.classList.remove("active_component_link");
            }
            link.classList.add("active_component_link");
            temp = link;
            console.log(temp)
        }
    } );
})