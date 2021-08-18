const getElement = (element) => document.querySelector(element);

const navItem1 = getElement("#i1");
const navItem2 = getElement("#i2");
const navItem3 = getElement("#i3");
const flagCol = getElement("#col-flag");
const flagUsa = getElement("#usa-flag");
const projBtn = getElement("#btn-project");
const titleSkill = getElement("#title-skill");
const titleProject = getElement("#title-project");
const titleContact = getElement("#title-contact");
const headText = getElement("#header-text");

const usaLang = ["Skills", "Projects", "Contact", 
                "Achieve your goals with quality software"];

const esLang = ["Habilidades", "Proyectos", "Contacto", 
                "Alcanza tus objetivos con software de calidad"];

function englishLang(){
    navItem1.innerText = usaLang[0];
    titleSkill.innerText = usaLang[0];
    navItem2.innerText = usaLang[1];
    projBtn.innerText = usaLang[1];
    titleProject.innerText = usaLang[1];
    navItem3.innerText = usaLang[2];
    titleContact.innerText = usaLang[2];
    headText.innerText = usaLang[3];
}

englishLang();

function spanishLang(){
    navItem1.innerText = esLang[0];
    titleSkill.innerText = esLang[0];
    navItem2.innerText = esLang[1];
    projBtn.innerText = esLang[1];
    titleProject.innerText = esLang[1];
    navItem3.innerText = esLang[2];
    titleContact.innerText = esLang[2];
    headText.innerText = esLang[3];
}

flagCol.addEventListener("click",()=>{
    spanishLang();
});

flagUsa.addEventListener("click",()=>{
    englishLang();
});

const typed = new Typed(".typed", {
    
    stringsElement: "#career-text",
    typeSpeed: 75,
    startDelay: 300,
    backSpeed: 75,
    smartBackspace: true,
    shuffle: false,
    backDelay: 1500,
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar: "|",
    contentType: "html"

});

let activeItem = false;

navItem1.addEventListener("click", ()=>{
    activeItem = true;
    if(activeItem){
        navItem1.classList.add("active-item");
        navItem2.classList.remove("active-item");
        navItem3.classList.remove("active-item");
    }
})
navItem2.addEventListener("click", ()=>{
    activeItem = true;
    if(activeItem){
        navItem2.classList.add("active-item");
        navItem1.classList.remove("active-item");
        navItem3.classList.remove("active-item");
    }
})
navItem3.addEventListener("click", ()=>{
    activeItem = true;
    if(activeItem){
        navItem3.classList.add("active-item");
        navItem1.classList.remove("active-item");
        navItem2.classList.remove("active-item");
    }
})
