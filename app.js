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

// Making the age variable
const birthday = new Date(2002,0,10);
const today = new Date();

if (today.getMonth() >= birthday.getMonth() && today.getDay() >= birthday.getDay()){
    document.getElementById("birthday").innerHTML = today.getFullYear() - birthday.getFullYear();
}

else {
    document.getElementById("birthday").innerHTML = today.getFullYear() - birthday.getFullYear() - 1;
}
