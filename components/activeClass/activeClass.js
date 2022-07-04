const navlinks = document.querySelectorAll(".doc_sidebar_list");

navlinks.forEach((link) => {
    link.addEventListener('click', function (event) { 
        event.preventDefault();
        navlinks.forEach(eachLink => eachLink.classList.remove("active_component_link"));
        this.classList.add("active_component_link");
    });
})