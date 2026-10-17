const themeButton = document.querySelector("#theme-toggle");
const filterButtons= document.querySelectorAll("[data-filter]");
const projectCards= document.querySelectorAll(".project-card");
const contactForm= document.querySelector("#contact-form");
const formStatus= document.querySelector("#form-status");

window.addEventListener("load", function () {
    window.scrollTo(0, 0);
});

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "Light Mode";
    } else {
        themeButton.textContent = "Dark Mode";
    }
});

filterButtons.forEach(function (button){
button.addEventListener("click", function(){
const selectedCategory= button.dataset.filter;
projectCards.forEach(function (card){
if(selectedCategory === "all" || card.dataset.category === selectedCategory){
card.hidden= false;
} else{
card.hidden= true;
}
})
})
});

contactForm.addEventListener("submit", function (event) {
event.preventDefault();
formStatus.textContent= "Thanks! The form is valid Have a great day.";
contactForm.reset();
});