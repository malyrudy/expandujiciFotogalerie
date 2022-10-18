const slides = document.querySelectorAll(".slide");

slides.forEach(function(oneslide) {
    oneslide.addEventListener("click", function() {
        slides.forEach(function(myslide) {
            myslide.classList.remove("active");
        });
        oneslide.classList.add("active")
    })
})