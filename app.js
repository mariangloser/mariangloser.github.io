const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Show the section

            // Remove the blur filter when the section is visible
            entry.target.style.filter = 'none';
        } else {
            entry.target.classList.remove('show'); // Hide the section

            // Add the blur filter when the section is hidden
            entry.target.style.filter = 'blur(5px)';
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
