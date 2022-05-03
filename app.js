(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-button").classList.remove("active-button");
            this.classList.add("active-button");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector("#switch-mode").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
