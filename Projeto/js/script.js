function scrollToSection(id){
    const section = document.getElementById(id);
    if (section){
        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        document.querySelectorAll(".secao").forEach(sec => {
            sec.classList.remove("destacada");
        });

        section.classList.add("destacada");
    }
}