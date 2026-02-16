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

});
