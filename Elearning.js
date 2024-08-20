document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.sidebar a');
    const sections = document.querySelectorAll('.grade-section');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Remove the active class from all sections
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Get the grade from the data attribute
            const grade = this.getAttribute('data-grade');

            // Add the active class to the selected section
            document.getElementById(grade).classList.add('active');
        });
    });
});