const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click",()=>{document.body.classList.toggle("dark");})

function scrollToSection(id){document.getById(id).scrollView({behavior:"smooth"});}