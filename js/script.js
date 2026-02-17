document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       Fade-in on scroll
    ========================== */

    const cards = document.querySelectorAll(".project");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {

                // Stagger effect (delay each card slightly)
                setTimeout(() => {
                    entry.target.classList.add("show");
                }, index * 150);

                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    cards.forEach(card => {
        card.classList.add("fade-in");
        observer.observe(card);
    });


    
    /* =========================
       Back to top button
    ========================== */

    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", function () {
        if (document.documentElement.scrollTop > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    });

    topBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    /* =========================
   Smooth image → text toggle
   + hide project text
   + change button text
========================== */

const githubButtons = document.querySelectorAll(".btn");

githubButtons.forEach(button => {
    button.addEventListener("click", function (e) {
        e.preventDefault();

        const project = this.closest(".project");
        const image = project.querySelector(".project-img");
        const description = project.querySelector(".project p");
        let message = project.querySelector(".working-text");

        // Create message if it doesn't exist
        if (!message) {
            message = document.createElement("div");
            message.textContent = "🚧 We're working on it!";
            message.classList.add("working-text");
            project.insertBefore(message, image.nextSibling);
        }

        if (!image.classList.contains("hidden")) {

            // Hide image + description
            image.classList.add("hidden");
            description.style.display = "none";

            setTimeout(() => {
                image.style.display = "none";
                message.style.opacity = "1";
                message.style.transform = "scale(1)";
            }, 500);

            // Change button text
            button.textContent = "← Go back";

        } else {

            // Show image again
            image.style.display = "block";
            description.style.display = "block";

            setTimeout(() => {
                image.classList.remove("hidden");
                message.style.opacity = "0";
                message.style.transform = "scale(0.95)";
            }, 10);

            // Change button text back
            button.textContent = "Se på Github";
        }
    });
});


});
