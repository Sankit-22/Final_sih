document.addEventListener("DOMContentLoaded", function () {
    const textSections = document.querySelectorAll(".text-section");
    let currentIndex = 0;

    function showTextSection(index) {
        textSections.forEach((section, i) => {
            section.classList.remove("active");
            if (i === index) {
                section.classList.add("active");
            }
        });
    }

    document.getElementById("prev").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + textSections.length) % textSections.length;
        showTextSection(currentIndex);
    });

    document.getElementById("next").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % textSections.length;
        showTextSection(currentIndex);
    });

    // Initialize the first text section as active
    showTextSection(currentIndex);
});

