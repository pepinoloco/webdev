document.addEventListener('DOMContentLoaded', function() {
    // Get all section headings
    const sections = document.querySelectorAll('section[id]');
    
    // Highlight active section in table of contents
    function highlightActiveSection() {
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove all active classes
                document.querySelectorAll('.sidebar a').forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class to current section
                const activeLink = document.querySelector(`.sidebar a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }

    // Smooth scroll to section when clicking on TOC links
    document.querySelectorAll('.sidebar a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll event listener
    window.addEventListener('scroll', highlightActiveSection);
    
    // Initial highlight
    highlightActiveSection();
}); 