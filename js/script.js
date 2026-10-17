const themeButton = document.querySelector("#theme-toggle");
const filterButtons= document.querySelectorAll("[data-filter]");
const projectCards= document.querySelectorAll(".project-card");

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